const httpConstant = require('../constants/httpConstant');
const msgConstant = require('../constants/msgConstant');
const CustomError = require('../utils/customError');
const authService = require('../services/auth-service');
const { verifyToken } = require('../utils/common');

module.exports = {
  authenticate: async (req, res, next) => {
    const token = req.token;

    if (!token) {
      return next(new CustomError(httpConstant.UNAUTHORIZED, msgConstant.ACCESS_TOKEN_MISSING));
    }

    let verifyObj;
    try {
      verifyObj = await verifyToken(token);
    } catch (err) {
      throw new CustomError(httpConstant.UNAUTHORIZED, msgConstant.INVALID_TOKEN);
    }

    if (!verifyObj) {
      throw new CustomError(httpConstant.UNAUTHORIZED, msgConstant.INVALID_TOKEN);
    }

    try {
      const user = await authService.getTotkenWithUser({
        token,
        user_id: verifyObj.id
      });

      if (!user) {
        throw new CustomError(httpConstant.UNAUTHORIZED, msgConstant.INVALID_TOKEN);
      }

      req.user = {
        id: user.user_id,
        verify_token_id: verifyObj.id,
        email: user.email,
        data: user
      };

      return next();
    } catch (err) {
      throw new CustomError(httpConstant.UNAUTHORIZED, msgConstant.INVALID_TOKEN);
    }
  }
};