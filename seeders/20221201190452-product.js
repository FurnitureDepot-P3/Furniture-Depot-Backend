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
        name: 'Dresser',
        category_id: 1,
        price: 300.00,
        description: 'A dresser for storing clothes',
        image: 'https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202225/0015/hudson-8-drawer-wide-dresser-z.jpg',
        in_stock: true
      },
      {
        name: 'Nightstand',
        category_id: 1,
        price: 100.00,
        description: 'A nightstand for storing things',
        image: 'https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202232/0102/hudson-26-nightstand-1-z.jpg',
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
        name: 'Couch',
        category_id: 2,
        price: 500.00,
        description: 'A couch for lounging',
        image: 'https://video-images.vice.com//products/628541a2721909009b347050/gallery-image/1652900258672-screen-shot-2022-05-18-at-25731-pm.png?crop=1xw:0.563376168224299xh;center,center',
        in_stock: true
      },
      {
        name: 'Coffee Table',
        category_id: 2,
        price: 200.00,
        description: 'A table for coffee',
        image: 'https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202227/0211/open-box-malcolm-60-rectangular-coffee-table-z.jpg',
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
        name: 'Chandelier',
        category_id: 3,
        price: 1259.00,
        description: 'A chandelier for lighting',
        image: 'https://cdn.shopify.com/s/files/1/2635/8844/products/CH028.jpg?v=1629706414',
        in_stock: true
      },
      {
        name: 'Dining Room Chair',
        category_id: 3,
        price: 150.00,
        description: 'A chair for sitting and enjoying a meal',
        image: 'https://secure.img1-cg.wfcdn.com/im/40144037/compr-r85/1273/127387403/fellsburg-linen-parsons-chair.jpg',
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
      {
        name: 'Patio Table & Chairs',
        category_id: 4,
        price: 850.00,
        description: 'Great for summer relaxing with your friends and family',
        image: 'https://mobileimages.lowes.com/marketingimages/77849841-f73b-414a-83da-965b81eaddfd/patio-furniture-patio-dining-sets.png',
        in_stock: true
      },
      {
        name: 'Fire Pit',
        category_id: 4,
        price: 300.00,
        description: 'A fire pit for sitting around and enjoying the outdoors',
        image: 'https://cdn.shopify.com/s/files/1/2959/5116/products/2_fcd1e94d-401f-4c5b-a366-1f5a49393480_600x.png?v=1640889249',
        in_stock: true
      },
    ]

    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
