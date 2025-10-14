//this is Aedon's route file
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Aedon says hi');
});

module.exports = router;