angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-max-schedule', {
		ScreenTitle: 'Edit Schedule',
		controller: function($scope, $location, Restangular, moment, Profile, Tools) {

			$scope.s = {
				startDate: new Date(),
				cycles: 7,
			};

			Tools.eachLift(function(l,k) {
				$scope.s[k] = l.default;
			});

			



			console.debug(Profile)

			$scope.$watch('s', function(s) {
				var startDate = moment(s.startDate)
				var maxes = [];

				for(i=0;i<=s.cycles;i++) {
					var isReset = (i % s.resetInterval === 0 && i !== 0);
					if(isReset) {
						maxes[i]['$isReset'] = true;
					}
					maxes[i] = {
						date: startDate.clone().add(i,'month').utc().toDate(),
					};
					angular.forEach(Profile.lifts, function(lift, liftKey) {
						maxes[i][liftKey] = s[liftKey] + (i*lift.increment);
					});


				}
				$scope.maxes = maxes;
			}, true);

			$scope.saveSchedule = function() {
				//$location.path('/max');
				Restangular.all('max').post($scope.maxes);
			};
		}
	});
});

