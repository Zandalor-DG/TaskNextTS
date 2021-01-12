'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre_Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Genre_Book.init(
    {
      genreId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Genre_Book',
    }
  );
  return Genre_Book;
};
