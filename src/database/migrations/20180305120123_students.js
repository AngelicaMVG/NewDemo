exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', table => {
    table.increments();

    table.string('name');
    table.string('lastName');
    table.string('avatar');

    return table;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student');
};
