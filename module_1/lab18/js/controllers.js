angular.module("calcApp")
	.controller("SumController", function($scope, MathOperations){
		$scope.sum = function(){
			$scope.result = MathOperations.add($scope.number1, $scope.number2);
		}
	})
	.controller("ResController", function($scope, MathOperations){
		$scope.res = function(){
			$scope.result = MathOperations.substract($scope.number1, $scope.number2);
		}
	})
	.controller("MulController", function($scope, MathOperations){
		$scope.mul = function(){
			$scope.result = MathOperations.multiply($scope.number1, $scope.number2);
		}
	})
	.controller("DivController", function($scope, MathOperations){
		$scope.div = function(){
			$scope.result = MathOperations.divide($scope.number1, $scope.number2);
		}
	})