'use strict';

angular.module('ayush',['ngRoute'])

//configuring routes

.config(function($routeProvider){
	$routeProvider.when('/',{
		//controller:'HomeCtrl',
		templateUrl:'templates/about.html'
	})
	.when('/skills',{
		//controller:'HomeCtrl',
		templateUrl:'templates/skills.html'
	})
	.when('/projects',{
		//controller:'HomeCtrl',
		templateUrl:'templates/projects.html'
	})
	.when('/resume',{
		//controller:'HomeCtrl',
		templateUrl:'templates/resume.html'
	})
	.when('/milestone',{
		// controller:'HomeCtrl',
		templateUrl:'templates/milestones.html'
	})
	.when('/contact',{
		// controller:'HomeCtrl',
		templateUrl:'templates/contact.html'
	})
})

//controllers

.controller('CollapsibleCtrl',function($scope){
	$(document).ready(function(){
		$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
	});
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