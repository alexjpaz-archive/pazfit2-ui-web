angular.module('app').config(function(ComponentProvider, d3) {
	ComponentProvider.register('graph', {
		componentGroup: 'graph',
		scope: {
			'graph': '=',
			'type': '@'
		},
		link: function(scope, element, attrs) {
			var svgEl = element.find('svg');

			scope.f = {};

			scope.f.pathl = d3.svg.line()
					.x(function(d) { return d.x * 50; })
					.y(function(d) { return d.y * 100; })
					.interpolate("step-before");


			element.bind('mousemove', function(e) {
				scope.hx = e.clientX - this.offset().x;
				scope.$apply();
			});


			element.bind('mouseout', function(e) {
				scope.hx = -9999;
				scope.$apply();
			});
			//scope.$watch('graph', draw);
		}
	});
});
