const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'products-api-db',
  password: 'docker',
  port: 5432,
  // values to mess with when optimizing
  // max: 20,
  // idleTimeoutMillis: 30000,
  // connectionTimeoutMillis: 2000,
});

module.exports = pool;
