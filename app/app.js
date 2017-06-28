(function (module) {

	'use strict';

	module.config(['$urlRouterProvider', function ($urlRouterProvider) {	

	    $urlRouterProvider.otherwise('/view1');

	}]);


})(
	angular.module('myApp', [
	  'ui.router',
	  'myApp.main',
	  'myApp.view1',
	  'myApp.view2',
	  'myApp.version'
	])
);

