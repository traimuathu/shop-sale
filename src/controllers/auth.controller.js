const AuthController = {};

AuthController.loginPage = (req, res) => {
  res.render('auth/login');
}

AuthController.signupPage = (req, res) => {
  res.render('auth/signup');
}

module.exports = AuthController;