const express = require("express");
const validate = require("express-validation");
const router = express.Router();
const validator = require("../validations/auth-validator");
const authController = require("../controllers/auth-controller");
const { catchValidationErrors } = require("../middlewares/auth-validator");

router.post(
  "/",
  validate(validator.authValidator.login),
  catchValidationErrors,
  authController.login
);
router.delete("/", authController.logout);

module.exports = router;
