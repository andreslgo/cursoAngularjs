angular.module('calcApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/suma', {
			templateUrl: 'suma.html',
			controller: 'ControllerOne'
		})

		.when('/resta', {
			templateUrl: 'resta.html',
			controller: 'ControllerFour'
		})

		.when('/multiplicacion', {
			templateUrl: 'multiplicacion.html',
			controller: 'ControllerTwo'
		})

		.when('/division', {
			templateUrl: 'division.html',
			controller: 'ControllerThree'
		})

		.otherwise({
			redirectTo: '/',
			templateUrl: 'otherwise.html'
		})

	}])