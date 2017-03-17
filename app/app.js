'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
.config(['$urlRouterProvider', function ($urlRouterProvider) {	

    $urlRouterProvider.otherwise('/view1');

}])

.config(['$stateProvider', function ($stateProvider) {

	$stateProvider.state({
		name: 'app',
		template: '<ui-view></ui-view>',
		abstract: true
	});

}]);
