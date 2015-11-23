angular.module("angular_ajax", [])
	.controller("studentController", function($scope, $http){
		var _url = 'data.json';
		$http.get(_url).success(function(response){
			console.log(response);
			$scope.students = response;
		});
	});