const httpConstant = require('../constants/httpConstant');
const msgConstant = require('../constants/msgConstant');
const CustomError = require('../utils/customError');
const authService = require('../services/auth-service');
const validator = require('express-validation');
const lodash = require('lodash');
const { verifyToken } = require('../utils/common');

module.exports = {
  catchValidationErrors: (err, req, res, next) => {
    if (err instanceof validator.ValidationError) {
      const errorDetails = lodash.map(err.errors, lodash.partialRight(lodash.pick, ['field', 'messages']));
      const error = new CustomError(err.status, err.message, errorDetails);
      return res.status(err.status).json(error);
    }
    if (err instanceof CustomError) {
      const error = new CustomError(err.status, err.message, err.errors);
      // logger.error(err);
      return res.status(err.status).json(error).end();
    }
    return next();
  },
  authenticate: async (req, res, next) => {
    const token = req.token;

    if (!token) {
      return next(new CustomError(httpConstant.UNAUTHORIZED, msgConstant.ACCESS_TOKEN_MISSING));
    }

    let verifyObj;
    try {
      verifyObj = await verifyToken(token);
    } catch (err) {
      return next(new CustomError(httpConstant.UNAUTHORIZED, msgConstant.INVALID_TOKEN));
    }

    if (!verifyObj) {
      return next(new CustomError(httpConstant.UNAUTHORIZED, msgConstant.INVALID_TOKEN));
    }

    try {
      const auth = await authService.getTotkenWithUser({
        token,
        user_id: verifyObj.id
      });

      if (!auth) {
        return next(new CustomError(httpConstant.UNAUTHORIZED, msgConstant.INVALID_TOKEN));
      }

      req.user = {
        id: auth.user_id,
        verify_token_id: verifyObj.id,
        email: auth.email,
        data: auth
      };

      return next();
    } catch (err) {
      throw new CustomError(httpConstant.UNAUTHORIZED, msgConstant.INVALID_TOKEN);
    }
  }
};