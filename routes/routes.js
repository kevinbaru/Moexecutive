var express = require('express');
var router = express.Router();

//////////////////////////////// PUBLIC ROUTES ////////////////////////////////
// Users who are not logged in can see these routes

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/landing', function(req, res, next) {
  res.render('index');
});


module.exports = router;