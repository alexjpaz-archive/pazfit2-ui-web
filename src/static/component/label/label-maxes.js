angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('label-maxes', {
		componentGroup: 'label',
		scope: {'labelMaxes':'='},
		replace: true,
		controller: function($scope, Profile) {
			$scope.Profile = Profile;
		}
	});
});
