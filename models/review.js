'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'reviews',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        })
      Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'myReviews',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        })
    }
  }
  Review.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
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
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews'
  });
  return Review;
};