// this is molly's route file
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('mollys route');
});

module.exports = router;
