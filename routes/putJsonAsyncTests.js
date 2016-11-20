var express = require('express');
var router = express.Router();

router.put('/', function (req, res) {
	res.send(req.body);
});

router.put('/500error', function (req, res) {
	res.status(500).send('Bad news!');
});

router.put('/returnHeaders', function (req, res) {
	res.send(req.headers);
});

module.exports = router;