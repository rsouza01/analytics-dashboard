// app/config/env/development.js

module.exports = {
	env: 'development',
	address: 'localhost',
	port: 3001,
	db: 'mongodb://localhost/analytics-dashboard',
	log_dir: '../logs/',

	consumer_key : process.env.CONSUMER_KEY,
	consumer_secret : process.env.CONSUMER_SECRET,
	access_token : process.env.ACCESS_TOKEN,
	access_token_secret : process.env.ACCESS_TOKEN_SECRET,
};
