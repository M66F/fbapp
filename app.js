

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//**************************************************************************************
//stuff for Passport
var passport = require('passport');
var session = require('express-session');
var secretConfig = require('./secretConfig.js')
//**************************************************************************************
// Initialize Passport
var initPassport = require('./passport/init.js');
initPassport(passport);
//**************************************************************************************

var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
//provide data to clients
//passport session initialization
app.use(session({ secret: secretConfig.SESSION_SECRET ,  saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
var routes = require('./routes/index.js')(passport);
app.use('/', routes);
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/playerdata', express.static(path.join(__dirname, 'crawly/data')));


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



/// error handlers


// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});

module.exports = app;
