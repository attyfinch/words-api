require("dotenv").config();

const pg = require('pg')

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
}

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: process.env.DB_DEV_PORT,
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PASSWORD,
      database: process.env.DB_DEV_NAME
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {min: 2, max: 10},
  },

};
