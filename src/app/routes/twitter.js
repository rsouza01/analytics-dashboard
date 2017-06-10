// app/routes/Tweets.js

module.exports = function(app) {
    var controller = app.controllers.twitter;
    app.get('/twitter', controller.listTweets);

    app.get('/twitter/:hashtag/:record_count/:date_from', controller.listTweetsParams);

    
};