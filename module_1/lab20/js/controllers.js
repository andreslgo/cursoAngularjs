angular.module("contactApp")
	.controller("EvenController", function($scope, Json){
		$scope.classTable = "even";
		$scope.persons = Json.getEven();
	})
	.controller("OddController", function($scope, Json){
		$scope.classTable= "odd";
		$scope.persons = Json.getOdd();
	});