const dotenv = require("dotenv");
dotenv.config();

const envVariables = {
  PORT: process.env.POSTGRES_PORT,
  DB_HOST: process.env.POSTGRES_HOST,
  DB_USER: process.env.POSTGRES_USER,
  DB_PASSWORD: process.env.POSTGRES_PASSWORD,
  DB_NAME: process.env.POSTGRES_DB,
};

module.exports = envVariables;
