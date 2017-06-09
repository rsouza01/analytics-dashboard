angular.module('analytics-dashboard', ['ngRoute'])
.config(function($routeProvider) {

	$routeProvider.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'DashboardController'
	});

	$routeProvider.when('/twitter', {
		templateUrl: 'partials/twitter.html',
		controller: 'TwitterController'
	});

	$routeProvider.when('/facebook', {
		templateUrl: 'partials/facebook.html',
		controller: 'FacebookController'
	});

	$routeProvider.otherwise({redirectTo: '/dashboard'});

});
