angular.module('contactApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider

		.otherwise({
			redirectTo: '/',
			templateUrl: 'otherwise.html',
			controller: 'ContactPeopleController'
		})

	}])