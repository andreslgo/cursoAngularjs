angular.module("calcApp")
	.controller("ControllerThree", function($scope){
		$scope.result=0;
		$scope.dividir = function(){
			if($scope.number2 === 0){
				$scope.result = "Indefinido";
			}else{
				$scope.result = $scope.number1 / $scope.number2;	
			}
		}
	})