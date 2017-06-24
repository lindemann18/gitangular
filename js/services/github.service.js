'use strict';
var githubservice = angular.module("githubService",[]);

githubservice.service('gitService',function($http,toaster){
	var self = {
		"isLoading":false,
		"URL":"https://api.github.com/",
		"users":[],
		"searchUsers":function(){
			$http.get(self.URL+"users").then(
				function(response)
				{
					self.users = response.data;
					self.isLoading = true;
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