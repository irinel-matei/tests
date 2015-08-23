/* global require, angular */

require(['config'], function(config) {
	
	'use strict';

	require.config({
		baseUrl: config.appDir,
		paths: {
			app: config.libDir + '/ng-app'
		}      ,
        urlArgs:  "bust=" + (new Date()).getTime()
	});
	
	require(
		[
			'app',
			'services/contactService',
			'services/flash',
            'directives/rating'
		],
		function (app) {
			angular.bootstrap(document, [app.name]);
		});

});