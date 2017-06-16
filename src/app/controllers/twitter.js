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

	controller.listTweets = function(req, res) {

        var searchData = {};
        searchData.hashtag = req.params.hashtag;
        searchData.record_count = req.params.record_count;
        searchData.date_from = req.params.date_from;
        
        // TODO: Arrumar o datepicker
        searchData.date_from = '2017-01-01';

        searchData.query = searchData.hashtag + ' since:' + searchData.date_from;

        console.log('searchData : ' + JSON.stringify(searchData));

        var twit = new Twit(config);

        var params = {
            q: searchData.query, count: searchData.record_count
        }

        twit.get('search/tweets', params, searchedData); 

        function searchedData(err, data, response) {

            console.log("Return => " + data.statuses.length);
            
            //saveDataToDB(data.statuses);

        };

        return res.json(tweets);
    }

    function saveDataToDB(tweets) {

        for (var i = 0, len = tweets.length; i < len; i++) {
            
            console.log('\n\Record # ' + i);
            console.log('\n\nUser => ' + tweets[i].user.screen_name.replace(/\n/g, ' '));
            console.log('\nText => ' + tweets[i].text.replace(/\n/g, ' '));
            console.log('\nDate => ' + tweets[i].created_at.replace(/\n/g, ' '));
            console.log('\n----------------------------------------------------------------');
        }

    }

    return controller;
};
