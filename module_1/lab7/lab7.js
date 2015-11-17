angular.module("lab7", [])
	.controller("ControllerOne", function($scope){

		$scope.concatenar = function(){
			$scope.result = $scope.a + $scope.b;
		}

	})
	.controller("ControllerTwo", function($scope){
		$scope.multiplicar = function(){
			$scope.result = parseFloat($scope.a) * parseFloat($scope.b);
			$scope.operation = "El resultado de multiplicar " + 
				$scope.a + " x " + $scope.b + " es :";
		}
		$scope.dividir = function(){
			$scope.result = parseFloat($scope.a) / parseFloat($scope.b);
			$scope.operation = "El resultado de dividir " + 
				$scope.a + " entre " + $scope.b + " es :";	
		}
	});