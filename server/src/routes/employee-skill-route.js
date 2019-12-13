const express = require('express');
const validate = require('express-validation');
const router = express.Router();
const { authenticate, catchValidationErrors } = require('../middlewares/auth-validator');
const { employeeSkillValidator } = require('../validations/employee-skill-validator');
const employeeSkillController = require('../controllers/employee-skill-controller');

router.post('/', authenticate, validate(employeeSkillValidator.create), catchValidationErrors, employeeSkillController.createEmployeeSkill);
router.get('/', authenticate, employeeSkillController.getEmployeeSkills);
router.get('/:id', authenticate, validate(employeeSkillValidator.get_employee), catchValidationErrors, employeeSkillController.getEmployeeSkill);
router.delete('/:id', authenticate, validate(employeeSkillValidator.get_employee), catchValidationErrors, employeeSkillController.deleteEmployeeSkill);
router.put('/:id', authenticate, validate(employeeSkillValidator.update), catchValidationErrors, employeeSkillController.updateEmployeeSkill);

module.exports = router;