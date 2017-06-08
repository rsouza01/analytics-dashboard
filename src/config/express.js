// config/express.js

var express = require('express');

var load = require('express-load');

module.exports = function() {

	var app = express();


	// middleware
	app.use(express.static('./public'));


	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);


	return app;

};
