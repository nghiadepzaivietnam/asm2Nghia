var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carRouter = require('./routes/car');
var homeRouter = require('./routes/home');
var superRouter = require('./routes/super');

var app = express();

//handblebars-equal
var hbs = require('hbs');
hbs.registerHelper('equal', require('handlebars-helper-equal'))

//Khai bao body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false}))

//Khai bao hbs
var hbs = require('hbs');
hbs.registerHelper('equal', require('handlebars-helper-equal'))

//Dateformat
var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat')); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/car', carRouter);
app.use('/car', homeRouter);
app.use('/super', superRouter);

//khai bao va cau hinh thu vien mongoose 
var mongoose = require('mongoose');
//go ten database vao cuoi link
var uri='mongodb+srv://nghiantgch210333:trongnghia0508@cluster0.dwmkcfi.mongodb.net/car'
mongoose.connect(uri)
.then(() => console.log ("Connect to DB succeed !"))
.catch((err) => console.log (err));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT ||3001);

module.exports = app;
