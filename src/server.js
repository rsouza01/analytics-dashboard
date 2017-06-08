// server.js

var http = require('http');
var app = require('./config/express')();

var config = require('./config/config')();

http.createServer(app).listen(config.port, config.address,

	function(){

		console.log('\n\n********************** Analytics Dashboard Application **********************\n\n');
		console.log('********************************************************************\n\n');

		console.log('Express Https Server ' + config.address + ' (' + config.env + ') listening on port ' + config.port);

		console.log('\n\nStarted at ' + new Date());
		console.log('\n\n********************************************************************\n\n');

});
