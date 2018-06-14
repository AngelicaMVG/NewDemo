exports.up = function(knex, Promise) {
  return knex.schema.createTable('holidays', jobTable => {
    //primary key
    jobTable.increments();
    jobTable.integer('totalDays');
    jobTable.integer('today');
    jobTable.integer('holidaysToday');
    jobTable.integer('allHolidays');

    return jobTable;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('holidays');
};
