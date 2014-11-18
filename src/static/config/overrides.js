angular.module('app').config(function($injector) {
	var AppConfig = $injector.get('AppConfig');
	var FinalAppConfig = {};

	try {
		var LocalStorageAppConfig = JSON.parse(localStorage.getItem('AppConfig'));
		angular.extend(FinalAppConfig, LocalStorageAppConfig);
	} catch(e) {
	}


	angular.extend(AppConfig, FinalAppConfig);
});
