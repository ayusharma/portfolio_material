'use strict';


angular.module('ayush',['ngRoute','ngSanitize'])

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
	.when('/blog',{
		controller:'BloggerCtrl',
		templateUrl:'templates/blog.html'
	})
	//For prohect details
	.when('/projects/spiffout',{
		controller:'SpiffoutCtrl',
		templateUrl:'templates/projects/spiffout.html'
	})
	.when('/projects/inloop',{
		controller:'InloopCtrl',
		templateUrl:'templates/projects/inloop.html'
	})
	.when('/projects/dailyrounds',{
		controller:'DailyroundsCtrl',
		templateUrl:'templates/projects/dailyrounds.html'
	})
	.when('/projects/pediatric',{
		controller:'PediatricCtrl',
		templateUrl:'templates/projects/pediatriconco.html'
	})
	.when('/projects/openeyecad',{
		controller:'OpeneyecadCtrl',
		templateUrl:'templates/projects/openeyecad.html'
	})
	.when('/projects/canceranalysis',{
		controller:'CancerAnalysisCtrl',
		templateUrl:'templates/projects/canceranalysis.html'
	})
	.when('/projects/openhealth',{
		controller:'OpenhealthCtrl',
		templateUrl:'templates/projects/openhealth.html'
	})
	.when('/projects/wordmatch',{
		controller:'WordmatchCtrl',
		templateUrl:'templates/projects/Wordmatch.html'
	})
	.when('/projects/bloodcollective',{
		controller:'BloodcollectiveCtrl',
		templateUrl:'templates/projects/bloodcollective.html'
	})
	.when('/projects/birthday',{
		controller:'BirthdayCtrl',
		templateUrl:'templates/projects/birthday.html'
	})
	.when('/projects/kiwi',{
		controller:'KiwiCtrl',
		templateUrl:'templates/projects/kiwi.html'
	})
	.when('/projects/ayusharma',{
		controller:'AyusharmaCtrl',
		templateUrl:'templates/projects/ayusharma.html'
	})
	.when('/projects/firstapi',{
		controller:'FirstapiCtrl',
		templateUrl:'templates/projects/firstapi.html'
	})
	.when('/projects/india',{
		controller:'IndiaCtrl',
		templateUrl:'templates/projects/india.html'
	})
	.when('/projects/medicalassist',{
		controller:'MedicalassistCtrl',
		templateUrl:'templates/projects/medicalassit.html'
	})
	.when('/projects/pixelcount',{
		controller:'PixelcountCtrl',
		templateUrl:'templates/projects/pixelcount.html'
	})
	.when('/projects/rajlive',{
		controller:'RajliveCtrl',
		templateUrl:'templates/projects/rajlive.html'
	})
	.when('/projects/firefoxos',{
		controller:'FirefoxOSCtrl',
		templateUrl:'templates/projects/firefoxos.html'
	})
	.when('/projects/igniters',{
		controller:'IgnitersCtrl',
		templateUrl:'templates/projects/igniters.html'
	})
	.when('/projects/dreambox',{
		controller:'DreamBoxCtrl',
		templateUrl:'templates/projects/dreambox.html'
	})
	.when('/projects/keyboard',{
		controller:'KeyBoardCtrl',
		templateUrl:'templates/projects/keyboard.html'
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
	.when('/contribution',{
		controller:'ContributionCtrl',
		templateUrl:'templates/osc.html'
	})
})




//controllers
.controller('SpiffoutCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('InloopCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('DailyroundsCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('PediatricCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('OpeneyecadCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('CancerAnalysisCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('OpenhealthCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('WordmatchCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('BirthdayCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('KiwiCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('AyusharmaCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('FirstapiCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('IndiaCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('MedicalassistCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('PixelcountCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('RajliveCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('FirefoxOSCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('IgnitersCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('DreamBoxCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('KeyBoardCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
})
.controller('BloodcollectiveCtrl',function(){
	$('.materialboxed').materialbox();
	$('.tooltipped').tooltip({delay: 50});
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


.controller('InstaCtrl',function($scope,$http){

	$scope.method = {};


    $('.materialboxed').materialbox();


	$http.jsonp('https://api.instagram.com/v1/users/1393385187/media/recent/?access_token=1393385187.1677ed0.6d9d9f6f1d6b4b59ab11526943cf1b9f', {
    params: {
      callback: 'JSON_CALLBACK',
      s: 'MSFT GE',
      f: 'nab'
    }
  }).success(function(data,status, headers, config){

		$scope.method.instagram = data.data;

		// console.log(data);

	}).error(function(data){
		console.log(data);
	});


	// $http.jsonp('https://graph.facebook.com/930291210369402/photos/uploaded?fields=images&access_token=CAANGK6t6KWEBAFDKqIVZC1CzdB8qv66ufYB3F6hBdHBFCDZBxDSaKCGzy88vtQsj6K1a3rUNiuPcEj8QbJd3JMK3mMZB68ZBa3qvBx8FusKV8clnPr6F73814lZCTS2ZCUa6MEUPlHWMoTyyI0W9Fx4BfB9psiRZANZAoZAyLDA68rRhY3cyBTDBK6OzvChWeZBT0ZD', {
 //    params: {
 //      callback: 'JSON_CALLBACK',
 //      s: 'MSFT GE',
 //      f: 'nab'
 //    }
 // 	}).success(function(data,status, headers, config){
 // 		$scope.method.fb = data.data;
 //  		console.log(data);
	// }).error(function(data){

	// });


})

.controller('BloggerCtrl',function($scope,$http){
	$scope.method = {};

	var req = {
      method: 'GET',
      url: 'https://www.googleapis.com/blogger/v3/blogs/410443138095270845/posts?key=AIzaSyAatG2VWY3lg9NFOaOK7fYqjYhNamWg6JQ'
    };
    $http(req).success(function(res) {
      $scope.method.blogposts = res.items;
      // console.log(res);
    }).error(function(res){
    	console.log(res)
    })
})
.controller('ContributionCtrl',function($rootScope){

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
		link: function (scope, elm, attrs)
            {

                scope.isLoading = function () {
                    return $http.pendingRequests.length;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                	//console.log(v);
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

.run(function($rootScope,$http) {
	$rootScope.rootmethod = {};


	//Github Authorization
	$http.defaults.headers.common.Authorization = 'Basic YXl1c2hhcm1hOjJjZmIwMzFkNDljMmM0MjY1MjEwZGI4Y2YyNjkwOWY4MjUwOWRhY2I=';




	var req = {
      method: 'GET',
      url: 'https://api.github.com/user/repos?per_page=200&type=owner',
    };

		$http(req).success(function(res) {
		      // console.log(res);

					$rootScope.rootmethod.reposcount = res.length;
					$rootScope.rootmethod.commitscount = 0
					$rootScope.rootmethod.langset = []
					$rootScope.rootmethod.follow = 0

					_.forEach(res,function(r){
						$http.get('https://api.github.com/repos/'+r.full_name+'/commits?per_page=999&author=ayusharma').then(function(data){
									$rootScope.rootmethod.commitscount = 	$rootScope.rootmethod.commitscount+ data.data.length;
						});
					})


					_.forEach(res,function(r){
						if (r.language != null){
							$rootScope.rootmethod.langset.push(r.language);
							$rootScope.rootmethod.langset = _.uniq($rootScope.rootmethod.langset, function(a) { return a;});
						}
					})

					$http.get('https://api.github.com/user/followers?per_page=200').then(function(data){
						// console.log(data.data.length);
					$rootScope.rootmethod.follow = data.data.length;
					});


					// function customizer(objValue, srcValue) {
					//   if (_.isArray(objValue)) {
					//     return objValue.concat(srcValue);
					// 	  }
					// }
					//
					// $rootScope.rootmethod.langs = {};
					// $rootScope.rootmethod.total = 0;
					//
					// _.forEach(res,function(r,i){
					// 	$http.get(r.languages_url+'?per_page=999&author=ayusharma').then(function(data){
					//
					// 		_.mergeWith($rootScope.rootmethod.langs, data.data, customizer);
					// 		$rootScope.rootmethod.total =	_.sum(_.values($rootScope.rootmethod.langs));
					//
					// 	});
					//
					// });

    }).error(function(res){
    	console.log(res)
    })


		//Kinto contribution tables

		$http.get('https://api.github.com/repos/kinto/kinto/commits?author=ayusharma').then(function(data){
					$rootScope.rootmethod.kintocommits = 	data.data.length;
		});

		$http.get('https://api.github.com/repos/kinto/kinto/issues?creator=ayusharma&state=all').then(function(data){
					$rootScope.rootmethod.kintoissues = 	data.data.length;
		});





})
