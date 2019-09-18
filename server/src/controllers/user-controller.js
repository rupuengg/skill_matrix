const userService = require('../services/user-service');
const { OK, SERVER_ERROR } = require('../config/httpConstans');
const { USER } = require('../constants/msgConstant');

const getUsers = async (req, res) => {
  try {
    const user = await userService.getUsers(req.user.id);
    return res.status(OK).send({
      data: user
    });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
};

const updateUserProfile = async (req, res) => {
  try {
    console.log('files', req.files);
    const emp = await userService.updateUserProfile(req.body, req.user.id);
    return res.status(OK).json({ status: USER.PROFILE_UPDATED, data: emp });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
};

const userController = {
  getUsers,
  updateUserProfile
};

module.exports = userController;