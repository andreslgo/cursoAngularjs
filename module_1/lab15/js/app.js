angular.module('spi', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/hello', {
			templateUrl: 'otherwise.html'
		})

		.when('/message/one', {
			templateUrl: 'message_one.html'
		})

		.otherwise({
			redirectTo: '/',
			templateUrl: 'otherwise.html'
		})
	}]);