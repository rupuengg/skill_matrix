const userModel = require('../models').user;

const getUsers = async () => {
  return userModel.findAll({});
};

// const getUser = async () => {
//   return userModel.findOne({});
// };

// {
//   where: filters
// }

const userDao = {
  getUsers,
  // getUser
};

module.exports = userDao;