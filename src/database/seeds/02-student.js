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
    id: 1,
    name: 'Maribel',
    lastName: 'Navia',
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.png'
  },
  {
    id: 2,
    name: 'Ingrid',
    lastName: 'Garcia',
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.png'
  },
  {
    id: 3,
    name: 'Cesar',
    lastName: 'Hernandez',
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.png'
  },
  {
    id: 4,
    name: 'Damian',
    lastName: 'Allende',
    avatar: 'http://simpleicon.com/wp-content/uploads/user1.png'
  },
  {
    id: 5,
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
