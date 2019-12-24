const lookUpMasterDao = require("../dao/lookUpMaster-dao");

const getLookUpData = async filters => {
  const lookUpData = await lookUpMasterDao.getlookUpData(filters);
  return lookUpData;
};

const getLookupMasterDataByID = async type => {
  const lookupMasterData = await lookUpMasterDao.getLookupMasterDataByID({
    Type: type
  });
  // const lookupMasterData = "1";
  return lookupMasterData;
};

const lookUpMasterService = {
  getLookUpData,
  getLookupMasterDataByID
};

module.exports = lookUpMasterService;
