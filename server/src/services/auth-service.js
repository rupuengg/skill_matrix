const authDao = require('../dao/auth-dao');
const userDao = require('../dao/user-dao');

const createToken = async (data) => {
  const auth = await authDao.createToken(data);
  return auth;
};

const userLogin = async (body) => {
  const user = await userDao.getUserByEmail({ username: body.username, password: body.password });
  return user;
}

const authService = {
  createToken,
  userLogin
};

module.exports = authService;