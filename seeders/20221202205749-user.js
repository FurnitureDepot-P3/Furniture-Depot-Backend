'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', 
    [
      {
        username: 'Darth Vader',
        email: 'dv1@deathstar.com',
        password: 'Iamtheboss',
        passwordDigest: 'Iamtheboss',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Ted Lasso',
        email: 'coach@.afcrichmond.com',
        password: 'callmecoach',
        passwordDigest: 'callmecoach',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'James Bond',
        email: 'jb007@.misix.com',
        password: 'topsecret',
        passwordDigest: 'topsecret',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], 
    {}
    )
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('users', null, {})
  }
};
