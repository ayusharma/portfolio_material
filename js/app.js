'use strict';

angular.module('ayush',['ngRoute','ngSanitize'])

//configuring routes
.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'templates/about.html'
	})
	.when('/explore',{
		templateUrl:'templates/explore.html'
	})
	.when('/writing',{
		templateUrl:'templates/writing.html'
	})
	.when('/projects',{
		templateUrl:'templates/projects.html'
	})
	.when('/resume',{
		templateUrl:'templates/resume.html'
	})
	.when('/milestone',{
		templateUrl:'templates/milestones.html'
	})
	.when('/contact',{
		templateUrl:'templates/contact.html'
	})
})

.controller('CollapsibleCtrl',function($scope){
   $(document).ready(function(){
   $('.collapsible').collapsible({
           accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   });
   $('.materialboxed').materialbox();
   $('.tooltipped').tooltip({delay: 50});
   });
})


//directives
.directive('header', [function(){
	var directive = {
		restrict: 'EA',
		templateUrl: 'templates/directive/header.html',
		controller:['$scope',function($scope){
			$scope.slideIt = function(){
				$( ".links-mobile" ).slideToggle( "slow" );
			}
		}]
	}
	return directive;
}])

.directive('footer', [function(){
	var directive = {
		restrict: 'EA',
		templateUrl: 'templates/directive/footer.html'
	}
	return directive;
}])

.directive('links', [function(){
	var directive = {
		restrict: 'EA',
		templateUrl: 'templates/directive/links.html'
	}
	return directive;
}])

.directive('loading', ['$http',function($http){
	var directive = {
		restrict: 'EA',
		templateUrl: 'templates/directive/loading.html',
		link: function (scope, elm, attrs) {
        scope.isLoading = function () {
            return $http.pendingRequests.length;
        };
        scope.$watch(scope.isLoading, function (v) {
          if(v){
              elm.show();
          }else{
              elm.hide();
          }
      });
    }
	}
	return directive;
}]);
