const User = require('../../models/User.js');
const { Model } = require('objection');

let userDataRows = [
  { email: 'admin@muktek.com', password: 'muktek', role: 'admin' },
  { email: 'maribel@muktek.com', password: 'cimi1', role: 'guest' }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  Model.knex(knex);
  return knex('user')
    .del()
    .then(function() {
      // Inserts seed entries
      return Promise.all(userDataRows.map(u => User.query().insert(u)));
    });
};
