import knexconfig from "../knexfile.js";
import knexjs from "knex";
const knex = knexjs(knexconfig);

export default knex;
