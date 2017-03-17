'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {

	$stateProvider.state({
		name: 'app.view1',
		url: '/view1',
		templateUrl: 'app/view1/view1.html',
		controller: 'View1Ctrl'
	});

}])

.controller('View1Ctrl', [function() {

}]);