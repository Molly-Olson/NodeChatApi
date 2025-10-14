// this is porter's route file
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Porter says Hi');
});

module.exports = router;
