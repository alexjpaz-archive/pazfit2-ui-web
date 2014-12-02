angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('label-log-health', {
		componentGroup: 'label',
		scope: {'labelLogHealth':'='},
		controller: function($scope) {
			$scope.health = 'UNKNOWN';
			$scope.$watch('labelLogHealth', function(l) {
				if(angular.isUndefined(l)) return;
				if(angular.isDefined(l.calculated)) {
					var mx = l.calculated.effectiveMax;
					var tm = l.calculated.targetMax;
					var es = l.calculated.estimatedMax;

					tm = Math.round(tm);


					if(es > tm && es > mx) {
						$scope.health = 'EXCELLENT';
					} else if(es < tm && es > mx) {
						$scope.health = 'GOOD';
					} else if(es < tm && es == mx) {
						$scope.health = 'OK';
					} else if(es < tm && es < mx) {
						$scope.health = 'BAD';
					} 
				}
			});
		},
	});
});
