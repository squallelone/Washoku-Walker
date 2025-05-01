export async function up(knex) {
  await knex.schema.createTable("dish", function (table) {
    table.increments();
    table.text("name").notNullable;
    table.string("category");
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("dish");
}
