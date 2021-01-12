'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate(models) {}
  }
  File.init(
    {
      original_name: DataTypes.STRING,
      path_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'File',
    }
  );
  return File;
};
