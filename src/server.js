/**
 * @file server.js
 * Provides server side entry-point.
 *
 * Links:
 * https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make
 */

var debug = require('debug')('http')

var http = require('http');
var app = require('./config/express')();

var config = require('./config/config')();

var appName = 'analytics-dashboard';

var log = require('./config/logs')(appName, config);


http.createServer(app).listen(config.port, config.address,

	function(){

		console.log('\n\n\n\n');
		console.log('*****************************************************************************');
		console.log('********************** Analytics Dashboard Application **********************');
		console.log('*****************************************************************************\n');

		console.log('Express Https Server '
			+ config.address + ' (' + config.env
			+ ') listening on port ' + config.port);

		console.log('\n\nStarted at ' + new Date());
		console.log('*****************************************************************************\n');


		debug('Booting application %s', appName);
		debug('Started at %s', new Date());
		log.info('Server started @ ' + new Date());
});
