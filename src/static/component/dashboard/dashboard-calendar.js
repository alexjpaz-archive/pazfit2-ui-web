angular.module('app').config(function(ComponentProvider, Chart) {
	ComponentProvider.register('dashboard-calendar', {
		componentGroup: 'dashboard',
		scope: true,
		controller: function($scope, moment) {
			var currentMoment = moment();
			function buildClndr(offset) {
				var c = {};

				if(angular.isNumber(offset)) {
					m = currentMoment.clone().add(offset, 'month');
				} else {
					m = currentMoment.clone();
				}

				c.startWithMonth = m;

				return c;
			}
			$scope.clndrs = {
				previous: buildClndr(-1),
				current: buildClndr(),
				next: buildClndr(1)
			};
			$scope.events = [
				{ date: "2014-12-01", and: "anything else" }
			]

		}
	});
});
