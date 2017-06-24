var appMain = angular.module("mainModule",[]);

appMain.controller("main",function($scope,gitService,toaster){
	toaster.pop("error","holis");
	$scope.gitService = gitService;
	$scope.gitService.searchUsers();

});
