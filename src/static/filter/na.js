angular.module('app').filter('na', function() {
	return function(v) {
		if(v === null || angular.isUndefined(v)) {
			return "N/A";
		} else {
			return v;
		}
	};
});
