import knex from "../knex.js";

// Read all dish information
async function getAll() {
  const dishes = await knex
    .select(
      "uuid",
      "name",
      "category",
      "description",
      "origin",
      "localRanking",
      "internationalRanking"
    )
    .from("dish")
    .orderBy("name", "asc");
  return dishes;
}

export default { getAll };
