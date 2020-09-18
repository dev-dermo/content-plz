var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WebsiteSchema = new Schema({
	websiteName: { type: String, required: true, max: 100 },
	pageName: { type: String, required: true, max: 100 },
	pageCopy: { type: String, max: 10000 },
	pageImages: { type: Array, max: 100 }
});

module.exports = mongoose.model('Website', WebsiteSchema);