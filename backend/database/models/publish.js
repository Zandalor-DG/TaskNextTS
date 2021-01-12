'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Publish.hasMany(models.Book, {
        foreignKey: 'publishId',
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  Publish.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Publish',
    }
  );
  return Publish;
};
