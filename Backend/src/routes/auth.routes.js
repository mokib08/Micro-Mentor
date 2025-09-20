const express = require('express')
const validators = require("../middlewares/validator.middleware")
const authController = require("../controller/auth.controller")


const router = express.Router();

//POST /auth/register
router.post("/register", validators.registerUserValidations, authController.registerUser)

//POST /auth/login
router.post("/login", validators.loginUserValidations, authController.loginUser)

module.exports = router