const User = require('../models/user.model');

const bcrypt = require('bcryptjs');

const AuthService = {};

AuthService.login = (req, res) => {

}

AuthService.signup = (req, res) => {
  let {username, email, fullname, password} = req.body;

  let errors = [];

  if(!username || !email || !fullname || !password) {
    errors.push({msg: 'Username, email or password may not be blank'});
  }

  if(errors.length > 0 ) {
    res.send(errors);
  } else {
    User.findOne({email: email})
      .then((err, user) => {
        if(user) {
          errors.push({msg: 'Email is exist!'});
        } else {
          const newUser = new User();
          newUser.username = username;
          newUser.email = email;
          newUser.fullname = fullname;
          newUser.password = bcrypt.hashSync(password, 10);

          newUser.save(err => {
            if(err) res.send({msg: err});
            res.redirect('/login');
          });
        }
      })
  }
}

module.exports = AuthService;