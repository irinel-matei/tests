'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Category = mongoose.model('Category'),
    _ = require('lodash');

var crud = require('./crud.server.controller')('Category', 'name');

crud.readPaging = function(req, res) {
			
			var query = {};
			var page = 0;
			var itemsPerPage = 5;

			if (req.query.filter) {
				// TODO: extend this to handle multiple filters
				query = req.query.filter;
			}

			page = req.params.page;
			itemsPerPage = req.params.itemsPerPage;

			//console.log("page " + res.params.itemsPerPage);


			Category.find(query).sort('name').skip(page*itemsPerPage).limit(itemsPerPage).exec(function(err, models) {
				if (err) {
					return res.status(400).send({
						message: errorHandler.getErrorMessage(err)
					});
				} else {


					//res.json(models);
Category.find(query).count().exec(function(err, cnt) {
				if (err) {
					return res.status(400).send({
						message: errorHandler.getErrorMessage(err)
					});
				} else {

					var full = {};

					full.PageData = models;
					full.Total = cnt;

					res.json(full);
				}
			});


				}
			});
		};

module.exports = crud;
