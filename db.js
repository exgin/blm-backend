const { Client } = require('pg');

const client = new Client(process.env.DATABASE_URL || 'postgresql:///blm');

client.connect();

module.exports = client;
