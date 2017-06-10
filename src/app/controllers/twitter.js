// app/controllers/Tweets.js
var debug = require('debug')('http')

var tweets = [
    {_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
    {_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
    {_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
    ];

var Twit = require('twit');
var config = require('../../config/config')();

module.exports = function(app) {

	var controller = {};

	var Twitter = app.models.twitter;

    controller.listTweetsParams = function(req, res) {   

        hashtag = ''
        record_count = '';
        date_from = ''
        
    }




	controller.listTweets = function(req, res) {

        var word = 'Buffalo Tom';
        var since = 'since:2011-07-11';
        var tweetCount = 5;

        var q = word + ' ' + since;

        var twit = new Twit(config);
        
        var params = {
            q: q,
            count: tweetCount
        }

        twit.get('search/tweets', params, searchedData); 

        function searchedData(err, data, response) {
            
            console.log("Return => " + data.statuses.length);

            
            /*

            console.log(data.statuses[0]);
            
            for (var i = 0, len = data.statuses.length; i < len; i++) {
                console.log('\n\nUser => ' + data.statuses[i].user.screen_name.replace(/\n/g, ' '));
                console.log('\nText => ' + data.statuses[i].text.replace(/\n/g, ' '));
                console.log('\nDate => ' + data.statuses[i].created_at.replace(/\n/g, ' '));
            }
            */              
        };

        return res.json(tweets);
    }
    return controller;
};
