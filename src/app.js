/* eslint-disable strict */
require('dotenv').config();
const morgan = require('morgan');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const express = require('express');
const cors = require('cors');
const CatsServices = require('../pets/CatsServices');
const DogsServices = require('../pets/DogsServices');

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

app.route('/api').get((req, res, next) => {
  // splash / home page request
  res.send({
    image: 'https://ak-s.ostkcdn.com/img/mxc/20150731_petpages_allaboutcats_01.jpg',
    intro: `Find cats and dogs available for adoption here on PETFUL. See a list of pets available and check if it's your turn to adopt. If so, click away and meet your new pet! You could meet your new best friend by clicking HERE`
  });
  next();
});

app
  .route('/api/cats')
  .get((req, res, next) => {
    res.json(CatsServices.readQue());
  });

app
  .route('/api/cats')
  .delete((req, res, next) => {
    res.json(CatsServices.adopt());
  });

app
  .route('/api/dogs')
  .get((req, res, next) => {
    res.json(DogsServices.readQue());
  });

app
  .route('/api/dogs')
  .delete((req, res, next) => {
    res.json(DogsServices.adopt());
  })

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
