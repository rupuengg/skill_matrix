const express = require("express");
const validate = require("express-validation");
const router = express.Router();
const {
  authenticate,
  catchValidationErrors
} = require("../middlewares/auth-validator");
// const {
//   projectSkillValidator
// } = require("../validations/project-skill-validator");
const projectSkillController = require("../controllers/projectSkill-controller");

//router.get("/:projectId", projectSkillController.getProjectSkills);
router.get("/:projectId", projectSkillController.getProjectSkillsByEmpID);
router.get("/:projectId", projectSkillController.getProjectSkills);
router.post("/", projectSkillController.upsertProjectSkills);

module.exports = router;
