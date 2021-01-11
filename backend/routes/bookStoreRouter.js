const express = require('express');
const bookStoreController = require('../controllers/bookStoreController');
const tokenChecker = require('../middleware/tokenChecker');
const checkerUser = require('../middleware/checkerUser');

const bookStoreRouter = express.Router();

bookStoreRouter.get('/allbooks', bookStoreController.allBooks);
bookStoreRouter.get(
  '/allfilteringoptions',
  bookStoreController.allFilteringOptions
);
bookStoreRouter.get('/getbook', checkerUser, bookStoreController.getBook);
bookStoreRouter.post('/comment', tokenChecker, bookStoreController.commentBook);
bookStoreRouter.post('/ratebook', tokenChecker, bookStoreController.rateBook);

module.exports = bookStoreRouter;
