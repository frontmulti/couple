var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log('/');
  fs.readFile(__dirname + '/html5up-lens/index.html', function(error, data) {
    if(error) {
      console.log(error);l
    } else {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(data);
    }
  });
});

module.exports = router;
