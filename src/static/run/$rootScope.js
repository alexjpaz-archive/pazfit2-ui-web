angular.module('app').run(function($rootScope, $injector) {
	$rootScope.Profile = $injector.get('Profile');
});
