angular.module("contactApp")
	.service("Json", function($http){

		var _url = 'data.json';
		var data;

		$http.get(_url).success(function(response){
			data = response;
		});

		this.getEven = function(){
			var _evenPersons = [];
			for(i in data){
				if( i % 2 === 0){
					_evenPersons.push(data[i]);
				}
			}
			return _evenPersons;
		}

		this.getOdd = function(){
			var _oddPersons = [];
			for(i in data){
				if( i % 2 !== 0){
					_oddPersons.push(data[i]);
				}
			}
			return _oddPersons;
		}
		
	});