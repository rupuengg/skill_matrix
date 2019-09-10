const userModel = require('../models').user;

const getUsers = async () => {
  return userModel.findAll({});
};
const userDao = {
  getUsers,
};

module.exports = userDao;