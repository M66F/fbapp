var express = require('express');
var router = express.Router();

/* GET home page. */

var test = {title:'Expresstest'};
router.get('/', function(req, res) {
  res.render('index', {title:"Die FB App"});
});


module.exports = router;
