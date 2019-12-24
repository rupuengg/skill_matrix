const lookUpMasterService = require("../services/lookUpMaster-service");
const { OK, SERVER_ERROR } = require("../constants/httpConstant");

const getLookUpData = async (req, res) => {
  try {
    const lookUp = await lookUpMasterService.getLookUpData();
    return res.status(OK).json({
      data: lookUp
    });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const getLookupMasterDataByID = async (req, res) => {
  try {
    const emp = await lookUpMasterService.getLookupMasterDataByID(
      req.params.id
    );
    //const emp = req.params.id;
    return res.status(OK).json({ data: emp });
    //return res.status(OK).json({ data: req.params.id });
  } catch (err) {
    res.status(err.status || SERVER_ERROR).json(err);
  }
};

const lookUpController = {
  getLookUpData,
  getLookupMasterDataByID
};

module.exports = lookUpController;
