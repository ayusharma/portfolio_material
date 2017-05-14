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
	$scope.loading = true;
	$http({
	  method: 'GET',
	  url: url
	}).then(function successCallback(response) {
	     $scope.writing.data = response.data;
			 $scope.loading = false;
	  }, function errorCallback(error) {
	    console.log(error)
	});
})

.controller('ProjectsController', function ($scope, $http) {
	var url = 'https://spreadsheets.google.com/feeds/list/1jYueR8BrT3qvvYCh7_tbH9wBXr-CbNzXiV_dZSAXpGQ/od6/public/values?alt=json';
	$scope.projects = {};
	$scope.loading = true;
	$http({
	  method: 'GET',
	  url: url
	}).then(function successCallback(response) {
	     $scope.projects.data = response.data;
			 $scope.loading = false;
	  }, function errorCallback(error) {
	    console.log(error)
	});
})

.controller('ResumeController', function ($scope) {
	// If absolute URL from the remote server is provided, configure the CORS
	// header on that server.
	$scope.loading = true;
	var url = 'https://docs.google.com/document/d/1S8OKfwODNMx--Rj2yevQ1hXnON4hc2qTCdw4JNZPfh4/export?format=pdf';
	// Disable workers to avoid yet another cross-origin issue (workers need
	// the URL of the script to be loaded, and dynamically loading a cross-origin
	// script does not work).
	// PDFJS.disableWorker = true;

	// The workerSrc property shall be specified.
	PDFJS.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

	// Asynchronous download of PDF
	var loadingTask = PDFJS.getDocument(url);
	loadingTask.promise.then(function(pdf) {
	  // Fetch the first page
	  var pageNumber = 1;
	  pdf.getPage(pageNumber).then(function(page) {
			// loader.turnOff();
	    var scale = 1.5;
	    var viewport = page.getViewport(scale);

	    // Prepare canvas using PDF page dimensions
	    var canvas = document.getElementById('the-resume');
	    var context = canvas.getContext('2d');
	    canvas.height = viewport.height;
	    canvas.width = viewport.width;

	    // Render PDF page into canvas context
	    var renderContext = {
	      canvasContext: context,
	      viewport: viewport
	    };
	    var renderTask = page.render(renderContext);
	    renderTask.then(function () {
				$scope.loading = false;
				$scope.$apply();
	      console.log('Page rendered');
	    });
	  });
	}, function (reason) {
	  // PDF loading error
	  console.error(reason);
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

.directive('loading', [function(){
	var directive = {
		restrict: 'EA',
		templateUrl: 'templates/directive/loading.html'
	}
	return directive;
}])

.run(function ($rootScope, $location) {
	$rootScope.$on('$locationChangeSuccess', function () {
		$rootScope.path = $location.path();
	});
})
