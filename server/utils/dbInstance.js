const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  host: 'productscontainer',
  database: 'products',
  password: 'password',
  port: 5432,
  // max: 20,
  // idleTimeoutMillis: 30000,
  // connectionTimeoutMillis: 2000,
});

module.exports = pool;
