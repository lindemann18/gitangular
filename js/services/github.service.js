'use strict';
var githubservice = angular.module("githubService",[]);

githubservice.service('gitService',function($http,toaster){
	var self = {
		"isLoading":false,
		"URL":"https://api.github.com/users",
		"users":[],
		"userInfo":null,
		"followers":[],
		"searchUsers":function(){
			self.isLoading = true;
			$http.get(self.URL).then(
				function(response)
				{
					self.users = response.data;
					self.isLoading = false;
				},
				function(err)
				{
					toaster.pop("error","Something Failed, we're working on it");
				}
			);
		},
		"searchUserByName":function(name){
			return $http.get(self.URL+"/"+name);
		},
		"searchFollowersByUser":function(user){
			return $http.get(self.URL+"/"+user+"/followers");
		}
	};
return self;
});