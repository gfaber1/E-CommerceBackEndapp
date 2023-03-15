const { INTEGER, STRING } = require('sequelize');
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns
    id: {
      allowNull: false,
      INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      STRING,
      allowNull: false,
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
