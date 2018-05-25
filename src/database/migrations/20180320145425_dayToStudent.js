exports.up = function(knex, Promise) {
  return knex.schema.table('days', function(table) {
    table
      .integer('studentId')
      .unsigned()
      .references('id')
      .inTable('student');

    return table;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('days', function(table) {
    table.dropForeign('studentId');
    table.dropColumn('studentId');
    return table;
  });
};
