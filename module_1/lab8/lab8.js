angular.module("lab8", [])
	.controller("controller_one", function($scope){
		
		$scope.showme = true;

		$scope.showHide = function(){
			if($scope.showme == true)
				$scope.showme = false;
			else
				$scope.showme = true;
		}
	})
	.controller("controller_two", function($scope){
		$scope.mouseLeave = function(){
			$scope.event_active = "Mouse Out";
		}

		$scope.mouseEnter = function(){
			$scope.event_active = "Mouse Enter";
		}

	});