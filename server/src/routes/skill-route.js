const express = require('express');
const validate = require('express-validation');
const router = express.Router();
const { authenticate, catchValidationErrors } = require('../middlewares/auth-validator');
const { skillValidator } = require('../validations/skill-validator');
const skillController = require('../controllers/skill-controller');

router.post('/', authenticate, validate(skillValidator.create), catchValidationErrors, skillController.createSkill);
router.get('/', authenticate, skillController.getSkills);
router.get('/:id', authenticate, validate(skillValidator.get_employee), catchValidationErrors, skillController.getSkill);
router.delete('/:id', authenticate, validate(skillValidator.get_employee), catchValidationErrors, skillController.deleteSkill);
router.put('/:id', authenticate, validate(skillValidator.update), catchValidationErrors, skillController.updateSkill);

// router.get('/', authenticate, skillController.getSkillAll);

module.exports = router;