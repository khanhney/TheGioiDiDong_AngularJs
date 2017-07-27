var app = angular.module('myApp', ['ngRoute']);

//Loading Header
app.controller('myController', function($scope){
	
	
	$scope.headerHTML = './component/headerComponent.html';
	$scope.topSilde = './component/top-silde.html';
	$scope.productWrapper = './component/productWrapper.html'
	$scope.utility = './component/utility.html'
});
