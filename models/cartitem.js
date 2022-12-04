'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CartItem.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'cart_item',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        })
      CartItem.belongsTo(models.Cart, {
        foreignKey: 'cart_id',
        as: 'my_cart',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        })
    }
  }
  CartItem.init({
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cart_id',
      onDelete: 'CASCADE',
      references: {
        model: 'carts',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id',
      onDelete: 'CASCADE',
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartItem',
    tableName: 'cartitems'
  });
  return CartItem;
};