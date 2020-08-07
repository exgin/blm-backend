require('dotenv').config();

const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.API_KEY);

module.exports = { newsapi };
