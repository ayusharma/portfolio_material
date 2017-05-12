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
		controller: 'ProjectsController',
		templateUrl:'templates/projects.html'
	})
	.when('/resume',{
		controller: 'ResumeController',
		templateUrl:'templates/resume.html'
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
	    console.log(error)
	});
})

.controller('ProjectsController', function ($scope, $http) {
	var url = 'https://spreadsheets.google.com/feeds/list/1jYueR8BrT3qvvYCh7_tbH9wBXr-CbNzXiV_dZSAXpGQ/od6/public/values?alt=json';
	$scope.projects = {};
	$http({
	  method: 'GET',
	  url: url
	}).then(function successCallback(response) {
	     $scope.projects.data = response.data;
	  }, function errorCallback(error) {
	    console.log(error)
	});
})

.controller('ResumeController', function ($scope) {
	$scope.printAction = function (e) {
		var evt = window.event ? event : e
		if(evt.ctrlKey && evt.keyCode == 80){
			var frm = document.getElementById("toPrint").contentWindow;
      frm.focus();// focus on contentWindow is needed on some ie versions
      frm.print();
    }
	};
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
}])
.run(function ($rootScope, $location) {
	$rootScope.$on('$locationChangeSuccess', function () {
		$rootScope.path = $location.path();
	});
})
