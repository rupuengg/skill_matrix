const userDao = require('../dao/user-dao');

const getUsers = async (user_id) => {
  const user = await userDao.getUsers({
    id: user_id
  });
  return user;
};

const userService = {
  getUsers,
};

module.exports = userService;