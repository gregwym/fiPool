var express = require('express');
var app = module.exports = exports = express();
var Pool = exports.Pool = require('./model');

app.set('views', __dirname);
app.locals.prefix = 'pool';

app.get('/:id', function(req, res) {
  Pool.findById(req.params.id, function(err, pool) {
    if (err) { return res.json(err); }
    res.render('pool', pool);
  });
});

app.get('/:id/choose/:choice', function(req, res) {
  res.send('You chose Choice #' + req.params.choice + ' for pool #' + req.params.id);
});
