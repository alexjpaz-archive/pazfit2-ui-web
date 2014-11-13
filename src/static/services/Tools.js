angular.module('app').service('Tools', function(moment, Profile) {
	this.eachLift = function(iterFn) {
		angular.forEach(Profile.lifts, iterFn);
	};
});
