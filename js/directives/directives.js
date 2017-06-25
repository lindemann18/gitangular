"use strict;"
var directives = angular.module("directives",[]);

directives.directive("ccSpinner",function(){
	return{
		'transclude':true,
		'restrict':'AE',
		'templateUrl':"views/directives/spinner.html",
		'scope':{
			'isLoading':'=',
			'message':'@'
		}
	}
});

directives.directive("userTile",function(){
	return{
		'transclude':true,
		'restrict':'AE',
		'templateUrl':"views/directives/user.html",
		'scope':{
			'avatarUrl':'=',
			'login':'=',
			'htmlUrl':'='
		},
		'controller':function($scope,$state,gitService)
		{
			$scope.ShowInfo = function(){
				$state.go('user',{login:$scope.login});
			}
		}
	}
});

directives.directive("userDetails",function(){
	return{
		'transclude':true,
		'restrict':'AE',
		'templateUrl':"views/directives/user_details.html",
		'scope':{
			'avatarUrl':'=',
			'login':'=',
			'htmlUrl':'=',
			"followers":'=',
			"publicRepos":'=',
			"location":'=',
			"name":'='
		},
		'controller':function($scope,$state,gitService)
		{
			console.log($scope);
		}
	}
});