const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const PORT = process.env.PORT || 3001;
// const knex = require("./knex/knex.js");
const app = express();
const queries = require("./queries");

app.get("/dish", (req, res) => {
  // use the knex variable above to create dynamic queries
  //   res.send("now is the time!");
  queries.getAll().then((results) => res.send(results));
  //   res.json();
});

app.use(cors());
app.use(helmet());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
