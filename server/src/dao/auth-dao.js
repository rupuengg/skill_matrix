const authModel = require('../models').auth;
const userModel = require('../models').user;

const createToken = async (data) => {
  console.log('Res', authModel);
  const result = await authModel.build(data).save();
  // console.log('Result', result);
  return result;
};

const deleteToken = async (filters) => {
  const result = await authModel.destroy({
    where: filters
  });
  return result;
};

const getToken = async (filters) => {
  const result = await authModel.findOne({
    where: filters
  });
  return result;
};

const getTotkenWithUser = async (filters) => {
  const result = await authModel.findOne({
    where: filters,
    includes: [{
      user: userModel
    }]
  });
  return result;
};

const authDao = {
  createToken,
  deleteToken,
  getToken,
  getTotkenWithUser,
};

module.exports = authDao;