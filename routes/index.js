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

// GET ALL Images
router.get('/api/images', function(req, res) {
  res.end();
});

// GET Single Image
router.get('/api/images/:image_id', function(req, res) {
  res.end();
});

// PUT UPDATE The Image
router.put('/api/images/:image_id', function(req, res) {
  res.end();
});

// DELETE Delete The Image
router.delete('/api/images/:image_id', function(req, res) {
  res.end();
});

module.exports = router;
