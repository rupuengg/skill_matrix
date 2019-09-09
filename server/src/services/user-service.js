const userDao = require('../dao/user-dao');

const getUsers = async () => {
  // try {
  const user = await userDao.getUsers();
  return user;
  // } catch (err) {
  //   return err
  // }
};

const userService = {
  getUsers
};

module.exports = userService;