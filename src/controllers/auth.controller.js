const Auth = {};

Auth.loginPage = (req, res) => {
  res.render('auth/login');
}

module.exports = Auth;