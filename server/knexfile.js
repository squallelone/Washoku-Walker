import dotenv from "dotenv";
dotenv.config();

export default {
  // development: {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: ".knex/migrations",
  },
  seeds: {
    directory: ".knex/seeds",
  },
  // },

  // == Note: Commenting out for now. Separate dev and prod set ups may not be necessary
  // for the scope of this project. -Justin ==

  // production: {
  //   client: "pg",
  //   connection: {
  //     host: "127.0.0.1",
  //     user: "mathieungo",
  //     database: "japanFood",
  //     charset: "utf8",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },
};
