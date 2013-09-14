var express = require('express'),
    app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', 'views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.static('build'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session({
  secret: 'your secret here'
}));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(app.get('port'));
