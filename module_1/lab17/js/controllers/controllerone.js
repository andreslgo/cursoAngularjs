angular.module("calcApp")
	.controller("ControllerOne", function($scope){
		$scope.result=0;
		$scope.sumar = function(){
			$scope.result = $scope.number1 + $scope.number2;
		}
	})