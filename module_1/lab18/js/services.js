angular.module("calcApp")
	.service("MathOperations", function(){
		this.add = function(a, b){
			return a + b;
		}
		this.substract = function(a, b){
			return a - b;
		}
		this.multiply = function(a, b){
			return a * b;
		}
		this.divide = function(a, b){
			if( b === 0){
				return 0;
			}else{
				return a / b;
			}
		}
	});