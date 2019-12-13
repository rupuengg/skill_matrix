const path = require('path');
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
    let sampleFile = req.files.file;
    const target = "./uploads/";
    const filename = Date.now() + path.extname(sampleFile.name);
    const r = await sampleFile.mv(target + filename);
    if (r)
      return res.status(500).json(r);

    req.body.profile_pic = filename;
    await userService.updateUserProfile(req.body, req.user.id);
    const user = await userService.getUsers(req.user.id);
    return res.status(OK).json({ status: USER.PROFILE_UPDATED, data: user });
  } catch (err) {
    return res.status(err.status || SERVER_ERROR).json(err);
  }
};

const userController = {
  getUsers,
  updateUserProfile
};

module.exports = userController;