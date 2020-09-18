var Website = require('../models/website');

// const { body, validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');

// READ
exports.index = function(req, res, next) {
	var site = req.params.websiteName;

	Website.find({ "websiteName": site }, function(err, website) {
		if (err) console.error(err);

		console.log(website);

		res.render('read', { data: website });
	});
};

// CREATE
exports.create = function(req, res, next) {
	data = JSON.parse(req.body.data);

	// iterate over data from post and save each as a document
	for (var i=0;i<data.length;i++) {
		var website = new Website({
			websiteName: data[i].websiteName,
			pageName: data[i].pageName,
			pageCopy: data[i].pageCopy,
			pageImages: data[i].pageImages
		});

		website.save(function(err) {
			if (err) console.error(err);
		});
	}

	console.log(data);

	res.redirect('./');
};