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
        rating: 4,
        comment: 'Great for relaxing on a warm summer day with a few beers',
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
      },
      {
        user_id: 3,
        product_id: 5,
        rating: 5,
        comment: 'This bed is very comfy. I like the color too.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 6,
        rating: 3, 
        comment: 'I like the table, but the legs are a little wobbly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        product_id: 7,
        rating: 2,
        comment: 'Fire pit is nice but my dog got a little too close and singed some tail hair.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        product_id: 8,
        rating: 5,
        comment: 'This thing really lights up the room, love the vintage feel as well.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 9,
        rating: 4,
        comment: 'Solid nightstand, nothing to complain about.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        product_id: 10,
        rating: 5,
        comment: 'I love this thing, it really brings the room together.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        product_id: 11,
        rating: 4,
        comment: 'Nice dresser, matches my nightstand well.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        product_id: 12,
        rating: '3',
        comment: 'difficult to assemble, but once it was done it was a nice addition to the backyard',
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
