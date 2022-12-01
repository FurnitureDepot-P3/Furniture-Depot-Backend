'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Bedroom'
      },
      {
        name: 'Living Room'
      },
      {
        name: 'Dining Room'
      },
      {
        name: 'Outdoor'
      }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null)
  }
};
