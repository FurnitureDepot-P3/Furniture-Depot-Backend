'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Bed',
        category_id: 1,
        price: 1200.00,
        description: 'A bed for sleeping',
        image: 'https://media.architecturaldigest.com/photos/620418650dae17d02208789b/1:1/w_1920,h_1920,c_limit/Zinus%20Linda%20Wood%20Platform%20Bed%20Frame.jpg',
        in_stock: true
      },
      {
        name: 'Chair',
        category_id: 2,
        price: 150.00,
        description: 'A chair for sitting',
        image: 'https://target.scene7.com/is/image/Target/GUEST_a8581c10-f5b2-4ab9-a175-977c82d5cbbe',
        in_stock: true
      },
      {
        name: 'Dining Room Table',
        category_id: 3,
        price: 1075.00,
        description: 'A table for eating',
        image: 'https://i.etsystatic.com/9980567/r/il/1eaeae/1213437659/il_fullxfull.1213437659_g8nt.jpg',
        in_stock: true
      },
      {
        name: 'Hammock',
        category_id: 4,
        price: 125.00,
        description: 'A hammock for relaxing',
        image: 'http://mobileimages.lowes.com/productimages/e162fe77-30d1-45ff-b7d4-2f6fe80950e6/47853976.jpg',
        in_stock: true  
      },
    ]

    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
