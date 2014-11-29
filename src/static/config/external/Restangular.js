angular.module('app').config(function($httpProvider, RestangularProvider, AppConfig) {

    var transformDate = function(item) {
        if(item.date) {
            item.date = new Date(item.date);
        }
    };

    RestangularProvider.setBaseUrl(AppConfig.Restangular.baseUrl);

    console.debug(AppConfig);

    RestangularProvider.setRestangularFields({
        id: "_id",
        etag: "_etag",
        selfLink: "_links.self.href"
    });

    RestangularProvider.setSelfLinkAbsoluteUrl(false);

    RestangularProvider.addRequestInterceptor(function(element, operation) {
        var transformedElement = element;

        if(operation === "put") {
            delete transformedElement._id;
            delete transformedElement._links;
            delete transformedElement._updated;
            delete transformedElement._created;
            delete transformedElement._etag;
        }

        return transformedElement;
    });

    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
        var extractedData = data;

        if (operation === "put") {
			console.debug('put', arguments);
        }
        return extractedData;
    });


    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
        var extractedData = data;



        if (operation === "getList") {
            angular.forEach(extractedData, transformDate);
        } else {
            extractedData = data;
            transformDate(extractedData);
        }
        return extractedData;
    });


    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
        var extractedData = data;

        if (operation === "getList") {
            // .. and handle the data and meta data
            extractedData = data._items;
            extractedData.meta = data._links;
        } else {
            extractedData = data;
        }
        return extractedData;
    });
});

