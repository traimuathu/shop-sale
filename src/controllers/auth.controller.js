const Auth = {};

Auth.loginPage = (req, res) => {
  res.render('auth/login');
}

Auth.signupPage = (req, res) => {
  res.render('auth/signup');
}

module.exports = Auth;