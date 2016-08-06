var express = require('express');
var fs = require('fs');
var router = express.Router();

var Picture = require('../models/picture');

/* GET home page. */
router.get('/', function(req, res) {
  console.log('call /');
  Picture.find(function(err, pictures) {
    if(err) return res.status(500).send({error: 'database failure'});
    res.render('index', { datas: pictures });
  });

  // fs.readFile(__dirname + '/html5up-lens/index.html', function(error, data) {
  //   if(error) {
  //     console.log(error);
  //   } else {
  //     res.writeHead(200, {'Content-Type' : 'text/html'});
  //     res.end(data);
  //   }
  // });
});

// GET Single Image
router.get('/api/pictures/:picture_id', function(req, res) {
  res.end();
});

// PUT UPDATE The Image
router.put('/api/pictures/:picture_id', function(req, res) {
  res.end();
});

// DELETE Delete The Image
router.delete('/api/pictures/:picture_id', function(req, res) {
  res.end();
});

router.post('/api/pictures', function(req, res) {
  console.log('post call');

  var picture = new Picture();
  picture.title = req.body.title;
  picture.description = req.body.description;
  picture.image_src = req.body.image_src;
  picture.thumbnail_src = req.body.thumbnail_src;

  picture.save(function(err) {
    if(err){
      console.error(err);
      res.json({result: 0});
      return;
    }
    res.json({result: 1});
  });
});

// GET ALL Images
router.get('/api/pictures', function(req, res) {
  console.log('get call');

  Picture.find(function(err, pictures) {
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(pictures);
  });
});

module.exports = router;
