const { Pool } = require("pg");
const envVariables = require("./config/envVariables");
const pool = new Pool({
  user: envVariables.DB_USER,
  host: envVariables.DB_HOST,
  database: envVariables.DB_NAME,
  password: envVariables.DB_PASSWORD,
  port: envVariables.PORT,
});

module.exports = pool;
