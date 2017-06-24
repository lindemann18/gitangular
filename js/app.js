var app = angular.module("app",['mainModule','ui.router','photoservices']);



app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('main',{
		url:'/',
		templateUrl:'views/home.html',
		controller:'main'
	})

	$urlRouterProvider.otherwise('/');
});