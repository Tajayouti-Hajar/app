"use strict";
const faker = require("faker");

const users = [];

for (let i = 0; i < 20; ++i) 
{
  users.push({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: i == 0 ? 'admin': ( i%2 == 0 ? 'author' : 'guest'),
    createdAt: new Date(),
    updatedAt: new Date()
  });
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};