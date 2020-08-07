/* News api route */
const express = require('express');
const router = new express.Router();
const { newsapi } = require('../config');

/* basic fetch for news */

// look at Node.js client library docs
router.get('/', async function (req, res, next) {
  try {
    const data = await newsapi.v2.everything({ totalResults: 10, q: 'blm', language: 'en', sortBy: 'relevancy' });
    return res.json(data);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
