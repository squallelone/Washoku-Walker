// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "mathieungo",
      database: "japanFood",
      charset: "utf8",
    },
    migrations: {
      directory: ".knex/migrations",
    },
    seeds: {
      directory: ".knex/seeds",
    },
    useNullAsDefault: true,
  },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },

  production: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "mathieungo",
      database: "japanFood",
      charset: "utf8",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

// var knex = require("knex")({
//   client: "pg",
//   connection: {
//     host: "127.0.0.1",
//     user: "mathieungo",
//     database: "japanFood",
//     charset: "utf8",
//   },
//   migrations: {
//     directory: __dirname + "/knex/migrations",
//   },
//   seeds: {
//     directory: __dirname + "/knex/seeds",
//   },
// });
