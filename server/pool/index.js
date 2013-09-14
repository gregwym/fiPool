var express = require('express');
var app = module.exports = express();

app.set('views', __dirname);

app.get('/:id', function(req, res) {
  // TODO: fetch pool dynamically
  var pool = {
    id: req.params.id,
    question: 'Sample Pool Question',
    choices: [
      'Choice 1',
      'Choice 2'
    ]
  };
  res.render('pool', pool);
});

app.get('/:id/choose/:choice', function(req, res) {
  res.send('You chose Choice #' + req.params.choice + ' for pool #' + req.params.id);
});
