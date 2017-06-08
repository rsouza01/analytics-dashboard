// app/config/env/development.js

module.exports = {
	env: 'development',
	address: 'localhost',
	port: 3001,
	db: 'mongodb://localhost/twitnode',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	seleniumUser: process.env.SELENIUM_USER,
	seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD
};
