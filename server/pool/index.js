var express = require('express');
var app = module.exports = exports = express();
var Pool = exports.Pool = require('./model');

app.set('views', __dirname);
app.locals.prefix = 'pool';

app.get('/', function(req, res) {
  Pool.find(function(err, pools) {
    if (err) { return res.json(err); }
    res.render('all', { pools: pools });
  });
});

app.post('/', function(req, res) {
  var pool = new Pool(req.body);
  pool.save(function(err, pool) {
    if (err) { return res.json(err); }
    res.redirect(pool.id);
  });
});

app.get('/new', function(req, res) {
  res.render('new');
});

app.get('/:id', function(req, res) {
  Pool.findById(req.params.id, function(err, pool) {
    if (err) { return res.json(err); }
    res.render('pool', pool);
  });
});

app.get('/:id/choose/:choice', function(req, res) {
  Pool.findById(req.params.id, function(err, pool) {
    if (err) { return res.json(err); }
    pool.votes.push({ choice: pool.choices[req.params.choice] });
    pool.save(function(err, pool) {
      if (err) { return res.json(err); }
      res.redirect(req.params.id);
    });
  });
});
