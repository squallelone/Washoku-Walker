import dotenv from "dotenv";
dotenv.config();

export default {
  // development: {
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
