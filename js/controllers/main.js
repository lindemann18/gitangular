var appMain = angular.module("mainModule",[]);

appMain.controller("main",function($scope,gitService,toaster){
	
	$scope.gitService = gitService;
	$scope.gitService.searchUsers();

});


appMain.controller("userDetails",function($scope,$stateParams,gitService,toaster){
	$scope.login = $stateParams.login;
	$scope.gitService = gitService;
	$scope.gitService.searchUserByName($scope.login).then(
		function(response)
		{
			$scope.gitService.userInfo = response.data;
			$scope.gitService.searchFollowersByUser($scope.login).then(
				function(response)
				{
					$scope.gitService.followers = response.data;
					console.log($scope.gitService.followers);
				},
				function(err)
				{
					toaster.pop("error","Something Failed, we're working on it");
				}
			);
		},
		function(err)
		{
			toaster.pop("error","Something Failed, we're working on it");
		}
	);
});