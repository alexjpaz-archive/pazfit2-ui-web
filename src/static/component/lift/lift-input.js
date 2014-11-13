angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('lift-input', {
		componentGroup: 'lift',
		scope: {'inputModel':'=liftInput'},
		controller: function($scope, Profile) {
			$scope.LIFTS = Profile.lifts;
		}
	});
});
