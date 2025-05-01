export async function up(knex) {
  await knex.schema.table("dish", (table) => {
    table.string("description");
    table.string("origin");
    table.string("localRanking");
    table.string("internationalRanking");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists("dish");
}
