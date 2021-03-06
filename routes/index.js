var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB_ENV]);
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/login', function(req, res, next) {
  if (req.app.locals.session.user_id > 0){
    res.redirect('/')
  }
  res.render('login');
});

router.get('/login/error', function(req, res, next) {
  res.render('login-error');
});

router.get('/login/invalid', function(req, res, next) {
  res.render('login-invalid');
});

router.get('/signup', function (req, res, next){
  res.render('signUp');
})

router.get('/logout', function(req, res, next){

  req.session = null;


  res.redirect('/');
})

router.get('/about', function(req, res, next) {
  res.render('about');
})

module.exports = router;
