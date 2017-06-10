// app/config/env/production.js

// contatooh/config/env/production.js
module.exports = {
	env: 'production',
	db: process.env.OPENSHIFT_MONGODB_DB_URL + 'twitnode',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	port: process.env.OPENSHIFT_NODEJS_PORT,
	address: process.env.OPENSHIFT_NODEJS_IP,
	domain: process.env.OPENSHIFT_APP_DNS,
	consumer_key : process.env.CONSUMER_KEY,
	consumer_secret : process.env.CONSUMER_SECRET,
	access_token : process.env.ACCESS_TOKEN,
	access_token_secret : process.env.ACCESS_TOKEN_SECRET

};
