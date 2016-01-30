'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'WATCH THE WEATHER... WHEREVER!'});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'LOGIN'});
});

router.get('/register', function(req, res, next) {
  res. render('register', { title: 'REGISTER'});
});

module.exports = router;