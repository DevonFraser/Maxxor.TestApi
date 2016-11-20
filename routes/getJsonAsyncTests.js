var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('response for getJsonAsyncTests');
});

router.get('/500error', function (req, res) {
	res.status(500).send('Bad news!');
});

router.get('/returnHeaders', function (req, res) {
	res.send(req.headers);
});

module.exports = router;