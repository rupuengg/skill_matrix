'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', [{
      first_name: "Rupendra",
      last_name: "Dhiman",
      email: "rdhiman@bhavnacorp.com",
      phone: "9891008373",
      profile_pic: ""
    }, {
      first_name: "Mohit",
      last_name: "Kohli",
      email: "mkohli@bhavnacorp.com",
      phone: "9891001234",
      profile_pic: ""
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
