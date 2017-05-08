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
		controller: 'WritingController',
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

.controller('WritingController',function($scope, $http){
	var url = 'http://morning-earth-19323.herokuapp.com/?feedURL=https://medium.com/feed/@ayusharma.in';
	$scope.writing = {};
	$http({
	  method: 'GET',
	  url: url
	}).then(function successCallback(response) {
	     $scope.writing.data = response.data;
	  }, function errorCallback(error) {
	    console.log(erroe)
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
