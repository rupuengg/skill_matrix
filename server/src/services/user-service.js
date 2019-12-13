const userDao = require("../dao/user-dao");

const getUsers = async user_id => {
  const user = await userDao.getUsers({
    id: user_id,
    IsActive: 1
  });
  return user;
};

const updateUserProfile = async (data, userId) => {
  const emp = await userDao.updateUserProfile(data, { id: userId });
  return emp;
};

const userService = {
  getUsers,
  updateUserProfile
};

module.exports = userService;
