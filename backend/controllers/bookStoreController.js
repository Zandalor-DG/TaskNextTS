const models = require('../database/models');
const { Op, Sequelize } = require('sequelize');

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
    const { page, pageSize } = req.query;

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
      limit,
      offset,
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

exports.getBook = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw new Error('Not bookId');
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

    res.status(201).json({ error: false, message: 'get your book', book });
  } catch (err) {
    res.status(400).json({ error: true, message: err.message });
  }
};
