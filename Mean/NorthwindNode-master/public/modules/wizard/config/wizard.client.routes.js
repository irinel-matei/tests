'use strict';

//Setting up route
angular.module('wizard').config(['$stateProvider',
	function($stateProvider) {
		// Wizard state routing
		$stateProvider.
		state('wizard', {
			url: '/wizard',
			templateUrl: 'modules/wizard/views/wizard.client.view.html'
		});
	}
]);

angular.module('wizard').directive('stepset', function () {
    return {
        restrict: 'EA',
        transclude: true,
        scope: {
            nextText: '@',
            previousText: '@',
            submitText: '@',
            submitAction: '='
        },
        controller: 'WizardController',
        templateUrl: 'partials/stepset.html',
        link: function (scope, element, attrs) {
            // TODO put link related things here.
        }
    };
})


/**
 * @ngdoc directive
 * @name step
 * @restrict EA TODO: this may or may not be correct
 *
 * @description
 * A Step is a single item that is displayed in the step set.
 * @example
 * TODO: put example here.
 */.directive('step', ['$parse', function ($parse) {
    var d = this;
    return {
        require: '^stepset',
        restrict: 'EA', // TODO: see above
        replace: true,
        templateUrl: 'partials/step.html',
        transclude: true,
        scope: {
            title: '@',
            description: '@'
        },
        controller: function ($scope) {
            // Determines if it should be displayed.  The stepset directive
            // controller needs to make sure only one shows up at a time.
            $scope.isDisplayed = false;
        },
        compile: function (elm, attrs, transclude) {
            return function postLink(scope, elm, attrs, ctrl) {
                ctrl.addStep(scope);
            };
        }
    };
}])