const userModel = require('../models').user;
const sequelize = require('../models').sequelize;

const getUsers = async (filters) => {
  const users = await userModel.findOne({
    where: filters
  });
  return users;
};

const getUserByEmail = async (email) => {
  const user = await userModel.findOne({
    where: sequelize.where(
      sequelize.fn('lower', sequelize.col('email')),
      email.toLowerCase()
    )
  });
  return user;
};

const updateUserProfile = async (data, filters) => {
  const emp = await userModel.update(data, { where: filters });
  return emp[0];
};

const userDao = {
  getUsers,
  getUserByEmail,
  updateUserProfile
};

module.exports = userDao;