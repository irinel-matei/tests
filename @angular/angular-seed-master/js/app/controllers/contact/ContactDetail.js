/* global define */

define(['app'], function (app) {

	'use strict';

	app.register.controller('ContactDetailController',
        ['$scope', '$routeParams', 'contactService', 'flash', function ($scope, $routeParams, contactService, flash) {

            flash('error', 'Something went wrong…');

		var id = $routeParams.id,
			contacts = contactService.contacts,

			getContactById = function (id) {
				var contact, l = contacts.length;
				while (l--) {
					contact = contacts[l];
					if (contact.id === id) {
						return contact;
					}
				}
				return null;
			};

		$scope.contact = getContactById(id);
	}]);
});