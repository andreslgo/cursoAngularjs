angular.module('contactApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider

		.when('/pares', {
			templateUrl: 'views/datos.html',
			controller: 'EvenController'
		})

		.when('/impares', {
			templateUrl: 'views/datos.html',
			controller: 'OddController'
		})

		.otherwise({
			redirectTo: '/',
			templateUrl: 'views/otherwise.html'
		})

	}])