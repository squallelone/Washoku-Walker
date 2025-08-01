import dotenv from "dotenv";
dotenv.config();

export default {
  client: "pg",
  connection: process.env.DB_URL || {
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
};
