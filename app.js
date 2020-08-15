/* BLM express */
const express = require('express');
const ExpressError = require('./expressError');
const cors = require('cors');

const app = express();

/* Middleware */
app.use(express.json());
app.use(cors());

/* Routes */
const routeNews = require('./routes/news');
const routeSurvey = require('./routes/survey');
app.use('/api', routeNews);
app.use('/survey', routeSurvey);

/* 404 Not Found  */
app.use((req, res, next) => {
  const err = new ExpressError('Not found', 404);

  return next(err);
});

/* General error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({ status: err.status, message: err.message });
});

module.exports = app;
