const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const session = require('express-session');

module.exports = app => {
	require('dotenv').config();

	// Import Mongo
	require('./configs/db.config')();

	app.use(morgan('dev'));
	app.use(favicon(path.join(__dirname, 'public', 'images', 'ic.ico')));
	app.use(require('cookie-parser')());

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));

	app.use(session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {maxAge: 300000}
	}));

	app.use(express.static(path.join(__dirname, 'public')));

	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, 'views'));

	// Router
	app.use(require('./routes/auth.route'));

	const port = process.env.PORT || 8000;
	app.listen(port, () => console.log(`Server is running on port: ${port}`));
}