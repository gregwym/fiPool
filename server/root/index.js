var express = require('express');
var app = module.exports = express();

app.set('views', __dirname);

app.get('/', function(req, res) {
  var randomPoolId = 12345;
  res.redirect('/pool/' + randomPoolId);
});
