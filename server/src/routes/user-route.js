const express = require('express');
const router = express.Router();

const { authenticate } = require('../middlewares/auth-validator');

const userController = require('../controllers/user-controller');

router.get('/', authenticate, userController.getUsers);
router.post('/', authenticate, userController.updateUserProfile);

module.exports = router;