

angular.module('analytics-dashboard').controller('TwitterController',
	function($scope, $resource) {

		var Twitter = $resource('/twitter');

		$scope.pageName = 'Twitter';
		$scope.subHeading = 'Dashboard';
	
		$scope.search_response = '';
		$scope.has_results = false;

		$scope.tweets = [];

		$scope.clearSearch = function() {
			$scope.hashtag = '';
			$scope.tweets = [];
			$scope.search_response = '';
			$scope.has_results = false;
			$scope.tweets = [];
		}

		$scope.searchHashtag = function() {
			
			var twitterRestEndpoint = $resource('/twitter/:hashtag/:record_count/:date_from', {
				hashtag: $scope.search.hashtag, 
				record_count: $scope.search.record_count,
				date_from:  $scope.search.date_from
			});

			twitterRestEndpoint.query(
				function(tweets) {
					$scope.tweets = tweets;
					$scope.has_results = $scope.tweets.length > 0;
					$scope.search_response = 'Twitter returned ' + $scope.tweets.length + ' results.';
				},
				function(erro) {
					$scope.search_response = 'Something is wrong.';
				}
			);

		};

});
