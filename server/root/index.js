var express = require('express');
var app = module.exports = express();

app.set('views', __dirname);

app.get('/', function(req, res) {
  var pool = {
    id: '12345',
    question: 'Sample Pool Question',
    choices: [
      'Choice 1',
      'Choice 2'
    ]
  };
  res.render('index', pool);
});
