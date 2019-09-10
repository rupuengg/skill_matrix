const authService = require('../services/auth-service');
const { OK, SERVER_ERROR } = require('../config/httpConstans');

const login = async (req, res) => {
  try {
    const user = await authService.userLogin(req.body);
    return res.status(OK).json(user);
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
}

const authController = {
  login
};

module.exports = authController;