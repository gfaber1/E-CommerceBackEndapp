const { Model, DataTypes, INTEGER, STRING } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    // define columns
    id: {
      INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      INTEGER,
      references: {
        model: 'product',
        id: 'key',
      },
      tag_id: {
        INTEGER,
        references: {
          model: 'tag',
          id: 'key',
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
