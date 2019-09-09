const userService = require('../services/user-service');
const {
  OK,
  SERVER_ERROR
} = require('../config/httpConstans');

const getUsers = async (req, res) => {
  try {
    const user = await userService.getUsers();
    return res.status(OK).send(user);
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
};

const userController = {
  getUsers
};

module.exports = userController;