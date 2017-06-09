// app/config/logs.js

var bunyan = require('bunyan');

module.exports = function(appName, config) {

	var log = bunyan.createLogger({
			name: appName,
			streams: [
			{
			  level: 'info',
			  path: config.log_dir + 'analytics-dashboard.log'
			}
		  ]
		});


	return log;
}
