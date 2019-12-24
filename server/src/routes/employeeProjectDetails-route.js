const express = require("express");
const validate = require("express-validation");
const router = express.Router();

const {
  authenticate,
  catchValidationErrors
} = require("../middlewares/auth-validator");

const employeeProjectDetailsController = require("../controllers/employeeProjectDetails-controller");

//router.get("/", employeeProjectDetailsController.getLookupMasterDataByID);
// router.get(
//   "/:id",
//   authenticate,
//   employeeProjectDetailsController.getProjectsByID
// );
router.get(
  "/:projectId",
  authenticate,
  employeeProjectDetailsController.getProjectSkillsByEmpID
);
router.post(
  "/",
  authenticate,
  employeeProjectDetailsController.saveEmployeeProjectDetails
);

module.exports = router;
