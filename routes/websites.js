var express = require('express');
var router = express.Router();

var websiteController = require('../controllers/websiteController');

// Website Routes

// will show content add to this website so far
// router.get('/', websiteController.index);

router.get('/:websiteName', websiteController.index);

router.get('/:websiteName/add', function(req, res, next) {
	res.render('add', { title: req.params.websiteName });
});

router.post('/:websiteName/add', websiteController.create);

module.exports = router;