angular.module('app').config(function(ComponentProvider, Chart) {
	ComponentProvider.register('chart', {
		componentGroup: 'chart',
		scope: {
			'chart': '=',
			'type': '@'
		},
		link: function(scope, element, attrs) {
			var canvas = element.find('canvas')[0];
			var ctx = canvas.getContext('2d');
			var pazChart = null
			
			var update = function(chart) {
					console.debug(chart);
				if(angular.isDefined(chart)) {
					new Chart(ctx).Line(chart.data, chart.options);
				}
			};
		
			scope.$watch('chart', update);
		}
	});
});
