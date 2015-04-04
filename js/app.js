'use strict';

angular.module('ayush',['ngRoute'])

//configuring routes

.config(function($routeProvider){
	$routeProvider.when('/',{
		controller:'HomeCtrl',
		template:"home"
	})
	.when('/projects',{
		controller:'HomeCtrl',
		template:'projects'
	})
})

//controllers

.controller('HomeCtrl',function($scope){

})

//directives
.directive('header', [function(){
    var directive = {
        restrict: 'EA',
        templateUrl: 'templates/directive/header.html'
    }
  return directive;
}])

.directive('footer', [function(){
    var directive = {
        restrict: 'EA',
        templateUrl: 'templates/directive/footer.html'
    }
  return directive;
}]);