const express = require('express');
const validate = require('express-validation');
const router = express.Router();
const { authenticate, catchValidationErrors } = require('../middlewares/auth-validator');
const { employeeValidator } = require('../validations/employee-validator');
const employeeController = require('../controllers/employee-controller');

router.post('/', authenticate, validate(employeeValidator.create), catchValidationErrors, employeeController.createEmployee);
router.get('/', authenticate, employeeController.getEmployees);
router.get('/:id', authenticate, validate(employeeValidator.get_employee), catchValidationErrors, employeeController.getEmployee);
router.delete('/:id', authenticate, validate(employeeValidator.get_employee), catchValidationErrors, employeeController.deleteEmployee);
router.put('/:id', authenticate, validate(employeeValidator.update), catchValidationErrors, employeeController.updateEmployee);

module.exports = router;