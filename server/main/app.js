// Package imports
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// Router import
const indexRouter = require('./routes');

// Create app
const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Router
app.use('/', indexRouter);

// Server is alive!
app.get('/', (req, res) => {
  res.json('The server is alive! 🐱‍👓');
});

module.exports = app;
