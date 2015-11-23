angular.module("mainApp", [])
	.controller("studentController", function($scope){
		$scope.reset = function(){
			$scope.firstName = "Andres";
			$scope.lastName = "Luque";
			$scope.email = "nelsonandreslg@gmail.com";
			$scope.age = 32;
		};

		$scope.reset();

		$scope.submit = function(){

		};
	});
