angular.module('app').constant('ComponentTemplateResolver', new function() {
	this.resolve = function(component_name, directiveDefinition) {
		var url = 'INVALID_URL';

		var componentGroup = null;

		if(angular.isDefined(directiveDefinition)) {
			componentGroup = directiveDefinition.componentGroup;
		}

		if(!componentGroup) {
			componentGroup = component_name.split('-')[0];
		}

		url = 'static/component/'+componentGroup+'/'+component_name+'.html';

		return url;
	};
});	
