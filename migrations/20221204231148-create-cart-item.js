'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cartitems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cart_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'cart_id',
        onDelete: 'CASCADE',
        references: {
          model: 'carts',
          key: 'id'
      }
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'product_id',
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id'
      }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cartitems');
  }
};