'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'products',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        })
      Product.hasMany(models.Review, {
        foreignKey: 'product_id',
        as: 'reviews',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
      onDelete: 'CASCADE',
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    price: DataTypes.FLOAT,
    description: DataTypes.STRING,
    image: DataTypes.TEXT,
    in_stock: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};