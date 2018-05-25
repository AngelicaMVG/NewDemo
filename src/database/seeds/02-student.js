// const faker = require('faker');

// const fakeStudent = () => {
//   const dataRows = [];
//   for (var i = 0; i <= 2; i++) {
//     dataRows.push({
//       name: faker.name.firstName(),
//       lastName: faker.name.lastName(),
//       avatar: faker.image.avatar()
//     });
//   }
//   return dataRows;
// };

const fake = [
  {
    name: 'Maribel',
    lastName: 'Navia',
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.png'
  },
  {
    name: 'Ingrid',
    lastName: 'Garcia',
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.png'
  },
  {
    name: 'Cesar',
    lastName: 'Hernandez',
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.png'
  },
  {
    name: 'Damian',
    lastName: 'Allende',
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.png'
  },
  {
    name: 'Arturo',
    lastName: 'Ortega',
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.png'
  }
];
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('student').insert(fake);
    });
};
