'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cartitems',
    [
      {
        cart_id: 1,
        product_id: 4,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cart_id: 2,
        product_id: 2,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cart_id: 3,
        product_id: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cart_id: 1,
        product_id: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cart_id: 3,
        product_id: 4,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cart_id: 1,
        product_id: 2,
        quantity: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cartitems', null, {})
  }
};
