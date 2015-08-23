/* global define */

define(['app'], function (app) {

	'use strict';

	app.factory('contactService', ['$http', '$q','$timeout', function ($http,$q,$timeout) {

		/**
		 * Essentially the data (model) will be retrieved from server
		 * via ajax request using the $http service. In this example,
		 * we have hard-coded the model here for simplicity's sake.
		 */

        var contactList =        [
            {
                id    : '648',
                name  : 'John Smith',
                phone : '347-260-1495',
                city  : 'Brooklyn',
                state : 'New York'     ,
                rating : 2
            },
            {
                id    : '451',
                name  : 'Barbara Campbell',
                phone : '602-387-8733',
                city  : 'Phoenix',
                state : 'Arizona'        ,
                rating : 3
            },
            {
                id    : '387',
                name  : 'Jason Moore',
                phone : '773-570-6321',
                city  : 'Chicago',
                state : 'Illinois'
            },
            {
                id    : '245',
                name  : 'Paul Wilson',
                phone : '305-925-8987',
                city  : 'Miami',
                state : 'Florida'
            },
            {
                id    : '872',
                name  : 'Laura Martinez',
                phone : '213-725-5387',
                city  : 'Los Angeles',
                state : 'California'
            },
            {
                id    : '735',
                name  : 'Robert Brown',
                phone : '281-982-2498',
                city  : 'Houston',
                state : 'Texas'
            }
        ];



            var deferred = $q.defer();

        $timeout(function() {
                deferred.resolve(contactList);
            }, 3000);


		return {
			contacts:   contactList    ,
            contactsAsync : deferred.promise   ,
            getContactsAsync : function()
            {
                var deferred = $q.defer();

                $timeout(function() {
                    deferred.resolve(contactList);
                }, 1000);

               // deferred.promise.then( function() { alert("test"); } )

                return  deferred.promise;
            }
		};

	}]);
});