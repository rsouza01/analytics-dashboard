// app/models/twitter.js

var mongoose = require('mongoose');

	module.exports = function() {

	var schema = mongoose.Schema({
		tweet_id: {
			type: String,
			required: true,
			index: {
				unique: true
			}			
		},
		screen_name: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		created_at: {
			type: String,
			required: true
		}
	});

	return mongoose.model('Twitter', schema);

};
