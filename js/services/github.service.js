'use strict';
var githubservice = angular.module("githubService",[]);

githubservice.service('gitService',function($http,toaster){
	var self = {
		"isLoading":false,
		"URL":"https://api.github.com/",
		"users":[],
		"searchUsers":function(){
			self.isLoading = true;
			$http.get(self.URL+"users").then(
				function(response)
				{
					self.users = response.data;
					self.isLoading = false;
					console.log(self.users);
				},
				function(err)
				{
					toaster.pop("error","Something Failed, we're working on it");
				}
			);
		}

	};
return self;
});