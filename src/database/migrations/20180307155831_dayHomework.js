exports.up = function(knex, Promise) {
  return knex.schema.createTable('days', table => {
    table.increments();
    table.string('dayName');
    table.boolean('homework').defaultTo(0);
    table.boolean('attendance').defaultTo(0);
    return table;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('days');
};
