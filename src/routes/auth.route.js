const express = require('express');
const router = express.Router();

const Auth = require('../controllers/auth.controller');

router.get('/login', Auth.loginPage);

module.exports = router;