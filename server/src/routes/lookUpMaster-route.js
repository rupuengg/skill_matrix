const express = require("express");
const validate = require("express-validation");
const router = express.Router();

const {
  authenticate,
  catchValidationErrors
} = require("../middlewares/auth-validator");

const lookUpMasterController = require("../controllers/lookUpMaster-controller");

router.get("/", lookUpMasterController.getLookUpData);
router.get("/:id", lookUpMasterController.getLookupMasterDataByID);

module.exports = router;
