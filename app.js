var express = require('express'),
    mongoose = require('mongoose'),
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

mongoose.connect(process.env.MONGO_URL);
console.log('Mongoose connected to ' + process.env.MONGO_URL);

app.use(require('root'));
app.use('/pool', require('pool'));

app.listen(app.get('port'));
console.log('App start listening on port ' + app.get('port'));
