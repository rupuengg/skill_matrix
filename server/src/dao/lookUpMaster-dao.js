const lookUpMasterModel = require("../models").LookUpMaster;

const getlookUpData = async filters => {
  const emps = await lookUpMasterModel.findAll({
    //where: filters,
    order: [["LookUpID", "ASC"]]
  });
  return emps;
};

const getLookupMasterDataByID = async filters => {
  const emp = await lookUpMasterModel.findAll({
    where: filters,
    order: [["LookUpID", "ASC"]]
  });

  return emp;
};

const lookUpMasterDao = {
  getlookUpData,
  getLookupMasterDataByID
};

module.exports = lookUpMasterDao;
