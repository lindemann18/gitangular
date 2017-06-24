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