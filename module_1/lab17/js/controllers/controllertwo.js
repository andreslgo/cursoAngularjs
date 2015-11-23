angular.module("calcApp")
	.controller("ControllerTwo", function($scope){
		$scope.result=0;
		$scope.multiplicar = function(){
			$scope.result = $scope.number1 * $scope.number2;
		}
	})