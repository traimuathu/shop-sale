const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth.controller');

router.get('/login', AuthController.loginPage);

router.get('/signup', AuthController.signupPage);

router.post('/signup', AuthController.signup);

module.exports = router;