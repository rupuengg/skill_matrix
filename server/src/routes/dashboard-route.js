const express = require('express');
const router = express.Router();
const { authenticate, catchValidationErrors } = require('../middlewares/auth-validator');
const dashboardController = require('../controllers/dashboard-controllers');
router.get('/empskills', authenticate, catchValidationErrors, dashboardController.getDetailsEmployee);
module.exports = router;



