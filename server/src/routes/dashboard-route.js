const express = require('express');
const router = express.Router();
const { authenticate, catchValidationErrors } = require('../middlewares/auth-validator');
const dashboardController = require('../controllers/dashboard-controllers');
router.get('/emp-skills', authenticate, catchValidationErrors, dashboardController.getEmployee);
module.exports = router;



