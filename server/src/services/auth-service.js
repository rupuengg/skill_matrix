const authDao = require('../dao/auth-dao');
const userDao = require('../dao/user-dao');

const bcypt = require('bcrypt');

const CustomError = require('../utils/customError');
const Common = require('../utils/common');
const MSG_CONSTANT = require('../constants/msgConstant');
const HTTP_CONSTANT = require('../constants/httpConstant');

const createToken = async (data) => {
  const auth = await authDao.createToken(data);
  return auth;
};

const userLogin = async (body) => {
  const user = await userDao.getUserByEmail(body.email);
  if (!user) {
    throw new CustomError(HTTP_CONSTANT.NOT_FOUND, MSG_CONSTANT.INVALID_LOGIN_CREDENTIAL);
  }

  const hash = await bcypt.compare(body.password, user.password);
  if (hash) {
    const jwt = await Common.createToken({
      email: user.email,
      id: user.id,
    });

    try {
      const auth = await authDao.createToken({
        user_id: user.id,
        token: jwt
      });

      return {
        message: MSG_CONSTANT.LOGIN_SUCCESSFULL,
        data: {
          token: auth.token,
          user: user.toJSON()
        }
      };
    } catch (err) {
      console.log('Error', err);
    }
  }
  throw new CustomError(HTTP_CONSTANT.BAD_REQUEST, MSG_CONSTANT.INVALID_LOGIN_CREDENTIAL);
};

const userLogout = async (token) => {
  if (!token) {
    throw new CustomError(HTTP_CONSTANT.SERVER_ERROR, MSG_CONSTANT.UNABLE_TO_REMOVE_TOKEN);
  }

  await authDao.deleteToken({ token });

  return {
    message: MSG_CONSTANT.LOGOUT_SUCCESSFULL
  }
};

const getTotkenWithUser = async (payload) => {
  const user = await authDao.getTotkenWithUser(payload);
  return user;
};

const authService = {
  createToken,
  userLogin,
  userLogout,
  getTotkenWithUser
};

module.exports = authService;