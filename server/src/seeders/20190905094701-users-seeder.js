const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      first_name: "Admin",
      last_name: "",
      email: "admin@yopmail.com",
      password: await bcrypt.hash("testing", 10),
      phone: "1234567890",
      profile_pic: "",
      user_type: "admin"
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
