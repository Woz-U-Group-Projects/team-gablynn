var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models');
var cors = require("cors");

var indexRouter = require('./routes/index');
var subscribeRouter = require('./routes/subscriber');
var postRouter = require('./routes/posts')

var app = express();

// serve the angular application
//app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use("/public", express.static("public/uploads"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/subscriber', subscribeRouter);
app.use('/posts', postRouter);

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
