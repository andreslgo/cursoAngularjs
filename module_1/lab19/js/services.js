angular.module("contactApp")
	.service("Contact", function(){

		var user_id = 1;
		var people = [
			{
				id: 1,
				name: "Andres Luque",
				email: "nelsonandreslg@gmail.com",
				mobile: "3007393899"
			}
		];

		this.save = function(contact){
			if(contact.id === null || contact.id === ""  || typeof contact.id === "undefined"){
				contact.id = ++user_id;
				people.push(contact);
			}else{
				for(i in people){
					if(people[i].id === contact.id){
						people[i] = contact;
					}
				}
			}
		}

		this.get = function(_id){
			for(i in people){
				if(people[i].id === _id){
					return people[i];
				}
			}
		}

		this.delete = function(_id){
			for(i in people){
				if(people[i].id === _id){
					people.splice(i, 1);
				}
			}
		}

		this.list = function(){
			return people;
		}
	});