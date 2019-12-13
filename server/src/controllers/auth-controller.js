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

const logout = async (req, res) => {
  try {
    const data = await authService.userLogout(req.token);
    console.log('data', data);
    return res.status(OK).json(data);
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
};

const authController = {
  login,
  logout
};

module.exports = authController;