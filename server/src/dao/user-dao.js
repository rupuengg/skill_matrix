const userModel = require('../models').user;

const getUsers = async () => {
  const users = await userModel.findAll({});
  return users;
};

const getUserByEmail = async (filters) => {
  const user = await userModel.findOne(filters);
  return user;
};

const userDao = {
  getUsers,
  getUserByEmail,
};

module.exports = userDao;