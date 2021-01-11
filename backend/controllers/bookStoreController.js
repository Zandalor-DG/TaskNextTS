const models = require('../database/models');
const { Op, Sequelize } = require('sequelize');
const addNotification = require('../middleware/addNotification');

const paginate = (page, pageSize) => {
  const offset = (page - 1) * pageSize;
  const limit = pageSize;

  return {
    offset,
    limit,
  };
};

exports.allBooks = async (req, res) => {
  try {
    const {
      page,
      pageSize,
      author,
      genres,
      publish,
      minPrice,
      maxPrice,
    } = req.query;

    if (!page && !pageSize) {
      throw new Error('Not offset or limit data');
    }
    const { offset, limit } = paginate(page, pageSize);

    const booksResponse = await models.Book.findAndCountAll({
      include: [
        {
          model: models.File,
          as: 'File',
          attributes: ['path_name'],
        },
        {
          model: models.Author,
          as: 'Author',
          attributes: ['name'],
          where: !author ? {} : { id: author },
        },
        {
          model: models.Publish,
          as: 'Publish',
          attributes: ['name'],
          where: !publish ? {} : { id: publish },
        },
        {
          model: models.Genre,
          as: 'Genre',
          attributes: ['name'],
          where: !genres ? {} : { id: { [Op.in]: genres.split(',') } },
        },
      ],
      limit,
      offset,
      where:
        !minPrice && !maxPrice
          ? {}
          : minPrice &&
            maxPrice && {
              price: {
                [Op.between]: [+minPrice, +maxPrice],
              },
            },
    });

    res.status(201).json({
      error: false,
      message: 'all book of filtered book',
      booksResponse,
    });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.allFilteringOptions = async (req, res) => {
  try {
    const allAuthor = await models.Author.findAll({ raw: true });
    const allPublish = await models.Publish.findAll({ raw: true });
    const allGenre = await models.Genre.findAll({ raw: true });
    const minPrice = await models.Book.min('price', {});
    const maxPrice = await models.Book.max('price', {});
    const allFilteringOptions = {
      allAuthor,
      allPublish,
      allGenre,
      minPrice,
      maxPrice,
    };
    res.status(201).json({
      error: false,
      message: 'all filtering options',
      allFilteringOptions,
    });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.getBook = async (req, res) => {
  try {
    const { id } = req.query;
    const userId = req.userId;

    if (!id) {
      throw new Error('Not bookId');
    }

    let userRate;
    if (!!userId) {
      userRate = await models.Rate.findAll({
        where: { bookId: id, userId: userId.userId },
      });
    }

    const book = await models.Book.findOne({
      where: { id: id },
      include: [
        {
          model: models.File,
          as: 'File',
          attributes: ['path_name'],
        },
        {
          model: models.Author,
          as: 'Author',
          attributes: ['name'],
        },
        {
          model: models.Publish,
          as: 'Publish',
          attributes: ['name'],
        },
        {
          model: models.Genre,
          as: 'Genre',
          attributes: ['name'],
        },
      ],
    });

    const commentsBook = await models.Comment.findAll({
      where: { bookId: id },
      include: [
        {
          model: models.User,
          as: 'CommentUser',
          attributes: ['email'],
          include: [
            {
              model: models.File,
              attributes: ['path_name'],
            },
          ],
        },
      ],
      order: [['createdAt', 'ASC']],
    });

    const rateBook = await models.Rate.findAll({
      where: { bookId: id },
      attributes: [
        [Sequelize.fn('count', Sequelize.col('rate')), 'overall'],
        [Sequelize.fn('sum', Sequelize.col('rate')), 'total'],
      ],
    });

    console.log(commentsBook.id);

    const data = {
      book,
      commentsBook,
      rateBook: rateBook[0].dataValues.total / rateBook[0].dataValues.overall,
      userRate: !userRate ? 'notRate' : userRate[0]?.rate,
    };

    res.status(201).json({ error: false, message: 'get your book', data });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.commentBook = async (req, res, next) => {
  try {
    const { userId } = req.decoded;
    const { comment, bookId, reply, replyId } = req.body;
    if (!comment && !bookId) {
      throw new Error('Not comment or bookId');
    }

    const newComment = await models.Comment.create({
      userId,
      comment,
      replyId: !replyId ? null : replyId,
      reply: !reply ? null : reply,
      bookId,
    });

    const replyUserId = await models.Comment.findOne({
      where: { id: replyId },
    });

    req.payload = { replyUserId: replyUserId.userId, commentId: newComment.id };

    const comments = await models.Comment.findAll({
      where: { bookId: bookId },
      include: [
        {
          model: models.User,
          as: 'CommentUser',
          attributes: ['email', 'id'],
          include: [
            {
              model: models.File,
              attributes: ['path_name'],
            },
          ],
        },
      ],
      order: [['createdAt', 'ASC']],
    });

    let commentAndNotification = {
      comments,
      isNotification: false,
      notification: null,
    };

    if (reply && replyId) {
      const data = await addNotification(req);
      commentAndNotification = {
        comments: commentAndNotification.comments,
        isNotification: data.isNotification,
        notification: data.notification,
      };
    }

    res
      .status(200)
      .json({ error: false, messge: 'create comment', commentAndNotification });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};

exports.rateBook = async (req, res) => {
  try {
    const { userId } = req.decoded;
    const { rateBook, bookId } = req.body;
    if (!rateBook && !bookId) {
      throw new Error('Not rateBook or bookId');
    }

    const [rateCreated, created] = await models.Rate.findOrCreate({
      where: {
        userId,
        bookId,
      },
      defaults: {
        rate: rateBook,
      },
    });

    if (!created) {
      await models.Rate.update(
        { rate: rateBook },
        {
          where: {
            userId,
            bookId,
          },
        }
      );
    }

    const rateBookUpdated = await models.Rate.findAll({
      where: { bookId: bookId },
      attributes: [
        [Sequelize.fn('count', Sequelize.col('rate')), 'overall'],
        [Sequelize.fn('sum', Sequelize.col('rate')), 'total'],
      ],
    });

    const rate =
      rateBookUpdated[0].dataValues.total /
      rateBookUpdated[0].dataValues.overall;

    res.status(201).json({ error: false, message: 'rate created', rate });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};
