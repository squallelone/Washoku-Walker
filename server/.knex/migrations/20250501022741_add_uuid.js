export async function up(knex) {
  await knex.schema.table("dish", (table) => {
    table.uuid("uuid").defaultTo(knex.fn.uuid());
  });
}

export async function down(knex) {
  await knex.schema.dropColumn("uuid");
}
