
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , config = require('./routes/config');

module.exports.config = config;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

console.log(process.env.PATH);

console.log(path.relative('C:\\Data\\GITProjects\\PreferenceServiceWorkSpace\\AddPreferenceValue\\app.js', 'C:\\Data\\GITProjects\\PreferenceServiceWorkSpace\\AddPreferenceValue\\config'));

console.log(config.param.db.url);

app.get('/', user.login);
//app.get('/', function(req, res){
//	res.redirect('http://' + req.headers.host + req.url+'login');
//	});

app.post('/', user.loginpost);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
