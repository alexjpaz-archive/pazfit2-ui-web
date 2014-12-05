angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-calendar-index', {
		controller: function($scope, Restangular, Profile, moment, CalendarHelper) {
			$scope.calendar = {
				events: []
			};

			CalendarHelper.getEvents().then(function(calendar) {
				$scope.calendar = calendar;
			});


			$scope.selectDay = function(day, clndr) {
				$scope.selectedDay = day;
				clndr.active  = day;
			};
		}
	});
});
