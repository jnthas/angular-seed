(function (module) {

	'use strict';

	module.config(['$stateProvider', function($stateProvider) {

		$stateProvider.state({
			name: 'app.view2',
			url: '/view2',
			template: '<view2></view2>'
		});

	}])


	module.component('view2', {
		templateUrl: 'app/view2/view2.html',
		controller: 'View2Ctrl'
	});

	module.controller('View2Ctrl', [function() {

	}]);

})(angular.module('myApp.view2', ['ui.router']));
