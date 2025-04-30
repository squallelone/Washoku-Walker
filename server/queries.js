const connection = require("./knexfile")[process.env.NODE_ENV || "production"];
const database = require("knex")(connection);

module.exports = {
  getAll() {
    return database("dish");
  },
};
