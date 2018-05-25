exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', jobTable => {
    //primary key
    jobTable.increments();

    //Fields
    jobTable.string('email').notNullable();
    jobTable.string('password').notNullable();
    jobTable.string('role').notNullable();

    return jobTable;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');
};
