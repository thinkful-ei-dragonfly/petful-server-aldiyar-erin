/* eslint-disable strict */
require('dotenv').config();
const morgan = require('morgan');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const express = require('express');
const cors = require('cors');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

app.route('/').get((req, res, next) => {
  // base case
  res.send('Hello, world!');
  next();
});

app.use('/api', (req, res, next) => {
  // splash / home page request
  res.send({
    image: 'https://ak-s.ostkcdn.com/img/mxc/20150731_petpages_allaboutcats_01.jpg',
    title: 'FIFO',
    intro: 'Find cats and dogs available for adoption here on PETFUL. You could meet your new best frien by clicking HERE'
  });
  next();
});

app.use('/api/cats', (req, res, next) => {
  res.json({
    message: 'cats over here'
  });
});

// middleware
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});
module.exports = app;