angular.module("lab6", [])
	.controller("lab6Controller", function($scope){
		$scope.result = 0;
		$scope.sumar = function(){
			$scope.result = parseInt($scope.a) + parseInt($scope.b);
		}
	});