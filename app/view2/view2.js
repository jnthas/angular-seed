'use strict';

angular.module('myApp.view2', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {

	$stateProvider.state({
		name: 'app.view2',
		url: '/view2',
		templateUrl: 'app/view2/view2.html',
		controller: 'View2Ctrl'
	});

}])

.controller('View2Ctrl', [function() {

}]);