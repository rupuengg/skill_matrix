const express = require("express");
const validate = require("express-validation");
const router = express.Router();

const {
  authenticate,
  catchValidationErrors
} = require("../middlewares/auth-validator");

// const { projectValidator } = require("../validations/project-validator");

const projectController = require("../controllers/project-controller");

//router.post('/', authenticate, validate(projectValidator.create), catchValidationErrors, projectValidator.createSkill);
router.get("/:clientId", projectController.getProjects);
router.get("/:clientId", projectController.getProjects);
//router.get('/:id', authenticate, validate(skillValidator.get_employee), catchValidationErrors, skillController.getSkill);
//router.delete('/:id', authenticate, validate(skillValidator.get_employee), catchValidationErrors, skillController.deleteSkill);
//router.put('/:id', authenticate, validate(skillValidator.update), catchValidationErrors, skillController.updateSkill);

// router.get('/', authenticate, skillController.getSkillAll);

module.exports = router;
