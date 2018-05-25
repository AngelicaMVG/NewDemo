exports.up = function(knex, Promise) {
  return knex.schema.createTable("weeks", table => {
    table.increments();
    table.integer("week");

    return table;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("weeks");
};
