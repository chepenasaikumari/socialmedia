const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'socialmedia',
  password: 'Sai@2002',
  port: 5432,
});

module.exports = pool;
