exports.up = function(knex, Promise) {
  return knex.schema.table("days", function(table) {
    table
      .integer("weekId")
      .unsigned()
      .references("id")
      .inTable("weeks");

    return table;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("days", function(table) {
    table.dropForeign("weekId");
    table.dropColumn("weekId");
    return table;
  });
};
