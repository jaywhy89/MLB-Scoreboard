angular.module("ScoreBoard")
.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'templates/pages/homeview/index.html'
	})

	.when('/dayview', {
		templateUrl: 'templates/pages/dayview/index.html'
	})

	.when('/gameview', {
		templateUrl: 'templates/pages/gameview/index.html'
	})

	.otherwise({ redirectionTo: '/' });

});