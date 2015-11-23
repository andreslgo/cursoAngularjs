angular.module('calcApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/suma', {
			templateUrl: 'views/sum.html',
			controller: 'SumController'
		})

		.when('/resta', {
			templateUrl: 'views/res.html',
			controller: 'ResController'
		})

		.when('/multiplicacion', {
			templateUrl: 'views/mul.html',
			controller: 'MulController'
		})

		.when('/division', {
			templateUrl: 'views/div.html',
			controller: 'DivController'
		})

		.otherwise({
			redirectTo: '/',
			templateUrl: 'otherwise.html'
		})

	}])