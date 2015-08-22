'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});


var directives = angular.module(ApplicationConfiguration.applicationModuleName);
directives.directive('butterbar', ['$rootScope',  '$interval',
function($rootScope,$interval) {
return {
link: function(scope, element, attrs) {
//element.addClass('hide');

var swap = true;

$interval(
   function(){

        if(swap){
element.removeClass('hide');
        }else
        {
        	 element.addClass('hide');
        }

       swap = !swap;
   }
	, 3000);

//$rootScope.$on('$routeChangeStart', function() {
//element.removeClass('hide');
//});
//$rootScope.$on('$routeChangeSuccess', function() {
//  element.addClass('hide');
//});
}
};
}]);
