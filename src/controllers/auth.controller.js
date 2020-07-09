// Import Auth Service
const AuthService = require('../services/auth.service');

const AuthController = {};

AuthController.loginPage = (req, res) => {
  res.render('auth/login');
}

AuthController.signupPage = (req, res) => {
  res.render('auth/signup');
}

AuthController.signup = AuthService.signup;

module.exports = AuthController;