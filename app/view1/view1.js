(function (module) {

	'use strict';

	

	module.config(['$stateProvider', function($stateProvider) {

		$stateProvider.state({
			name: 'app.view1',
			url: '/view1',
			template: '<view1></view1>'
		});

	}])

	module.component('view1', {
		templateUrl: 'app/view1/view1.html',
		controller: 'View1Ctrl'
	});

	module.controller('View1Ctrl', [function() {
		console.log('view 1 ctrl');
	}]);

})(angular.module('myApp.view1', ['ui.router']));

