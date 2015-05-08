'use strict';


angular.module('ayush',['ngRoute'])

//configuring routes


.config(function($routeProvider){
	$routeProvider.when('/',{
		//controller:'HomeCtrl',
		templateUrl:'templates/about.html'
	})
	.when('/explore',{
		//controller:'HomeCtrl',
		templateUrl:'templates/explore.html'
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


.controller('InstaCtrl',function($scope,$http){

	

	$http.jsonp('https://api.instagram.com/v1/users/1393385187/media/recent/?access_token=1393385187.1677ed0.6d9d9f6f1d6b4b59ab11526943cf1b9f', {
    params: {
      callback: 'JSON_CALLBACK',
      s: 'MSFT GE',
      f: 'nab'
    }
  }).success(function(data,status, headers, config){

			$scope.method = {};
			$scope.method.instagram = data.data;
			$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
		}).error(function(data){
			
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