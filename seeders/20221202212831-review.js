'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', 
    [
      {
        user_id: 1,
        product_id: 1,
        rating: 4,
        comment: 'pretty good, but not five stars',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        product_id: 2,
        rating: 5,
        comment: 'manalive, this thing is cosy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 3,
        rating: 4,
        comment: 'needed something to warm up the death star break room and this did the trick',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        product_id: 4,
        rating: 3,
        comment: 'difficult to assemble. I just wanted to relax!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        product_id: 4,
        rating: 5,
        comment: 'arrived in a jiffy.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], 
    {}
    )
  },  
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('reviews', null, {})
  }
};
