// app/config/env/cloud9.js

module.exports = {
	env: 'cloud9',
	address: process.env.IP,
	port: process.env.PORT,
	db: 'mongodb://' + process.env.IP + '/analytics-dashboard',
};
