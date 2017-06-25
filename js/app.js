var app = angular.module("app",['mainModule',
	'ui.router','githubService','toaster',
	'ngAnimate','directives','angularSpinner']);



app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('main',{
		url:'/',
		templateUrl:'views/home.html',
		controller:'main'
	})

	.state('user',{
		url:'/user/:login/',
		templateUrl:'views/user_detail.html',
		controller:'userDetails'
	})
	$urlRouterProvider.otherwise('/');
});