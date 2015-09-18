var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //next();	
});

router.get('/hello',function(req, res, next) {
  res.render('helloWorld', { title: 'Express' });
  //next();	
});

router.get('/userlist',function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');  
  collection.find({},{}, function(e,docs){
	res.render('userlist',{"userlist" : docs});
  });
  	
});


module.exports = router;
