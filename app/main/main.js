(function (module) {

	'use strict';

	module.config(['$stateProvider', function ($stateProvider) {

		$stateProvider.state({
			name: 'app',
			template: '<main></main>',
			abstract: true
		});

	}]);


	module.component('main', {
		templateUrl: 'app/main/main.html',
		controller: 'MainController'
	});


	module.controller('MainController', function () {	
		console.log('controller main');

	});

	
})(angular.module('myApp.main', ['ui.router']))
