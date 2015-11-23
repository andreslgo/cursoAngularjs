angular.module("calcApp")
	.controller("ControllerFour", function($scope){
		$scope.result=0;
		$scope.restar = function(){
			$scope.result = $scope.number1 - $scope.number2;
		}
	})