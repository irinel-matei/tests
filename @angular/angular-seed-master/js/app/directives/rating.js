/* global define */

define(['app'], function (app) {

    'use strict';

    app.directive('rating', function () {
        return {
            restrict: 'A',
            template: '<ul class="rating">' +
                '<li ng-repeat="star in stars" class="filled" ng-click="toggle($index)">' +
                '\u2605' +
                '</li>' +
                '</ul>',
            scope: {
                ratingValue: '=',                //object
                onRatingSelected: '&', //function
                readonly: '@' //string
            },
            link: function (scope, elem, attrs) {
                var updateStars = function () {

                    scope.stars = [];
                    for (var i = 0; i < scope.ratingValue; i++) {
                        scope.stars.push({});
                    }

                };


                scope.toggle = function (index) {

                    if (scope.readonly && scope.readonly === 'true') {
                        return;
                    }

                    scope.ratingValue = index + 1;

                    if (scope.onRatingSelected) {
                        scope.onRatingSelected({newRating: index + 1});
                    }
                };

                scope.$watch('ratingValue', function (oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }
        }
    });

}   );