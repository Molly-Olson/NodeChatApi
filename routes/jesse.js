// this is jesse's route file
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Jesse says hi');
});

module.exports = router;
