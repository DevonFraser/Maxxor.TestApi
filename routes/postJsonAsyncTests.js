var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
	res.send(req.body);
});

router.post('/500error', function (req, res) {
	res.status(500).send('Bad news!');
});

router.post('/returnHeaders', function (req, res) {
	res.send(req.headers);
});

module.exports = router;