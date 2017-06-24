var appMain = angular.module("mainModule",[]);

appMain.controller("main",function($scope,gitService,toaster){
	
	$scope.gitService = gitService;
	$scope.gitService.searchUsers();

});
