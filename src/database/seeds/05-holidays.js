const data = [
  {
    totalDays: 75,
    today: 0,
    allHolidays: 0,
    holidaysToday: 0
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('holidays')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('holidays').insert(data);
    });
};
