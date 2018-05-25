// const fakeWeeks = () => {
//   const weeks = [];
//   for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= 15; j++) {
//       weeks.push({
//         studentId: i,
//         week: j
//       });
//     }
//   }
//   return weeks;
// };

const fake = [
  {
    week: 1,
    studentId: 1
  },
  {
    week: 2,
    studentId: 1
  },
  {
    week: 3,
    studentId: 1
  },
  {
    week: 4,
    studentId: 1
  },
  {
    week: 5,
    studentId: 1
  },
  {
    week: 6,
    studentId: 1
  },
  {
    week: 7,
    studentId: 1
  },
  {
    week: 8,
    studentId: 1
  },
  {
    week: 9,
    studentId: 1
  },
  {
    week: 10,
    studentId: 1
  },
  {
    week: 11,
    studentId: 1
  },
  {
    week: 12,
    studentId: 1
  },
  {
    week: 13,
    studentId: 1
  },
  {
    week: 14,
    studentId: 1
  },
  {
    week: 15,
    studentId: 1
  },
  {
    week: 1,
    studentId: 2
  },
  {
    week: 2,
    studentId: 2
  },
  {
    week: 3,
    studentId: 2
  },
  {
    week: 4,
    studentId: 2
  },
  {
    week: 5,
    studentId: 2
  },
  {
    week: 6,
    studentId: 2
  },
  {
    week: 7,
    studentId: 2
  },
  {
    week: 8,
    studentId: 2
  },
  {
    week: 9,
    studentId: 2
  },
  {
    week: 10,
    studentId: 2
  },
  {
    week: 11,
    studentId: 2
  },
  {
    week: 12,
    studentId: 2
  },
  {
    week: 13,
    studentId: 2
  },
  {
    week: 14,
    studentId: 2
  },
  {
    week: 15,
    studentId: 2
  },
  {
    week: 1,
    studentId: 3
  },
  {
    week: 2,
    studentId: 3
  },
  {
    week: 3,
    studentId: 3
  },
  {
    week: 4,
    studentId: 3
  },
  {
    week: 5,
    studentId: 3
  },
  {
    week: 6,
    studentId: 3
  },
  {
    week: 7,
    studentId: 3
  },
  {
    week: 8,
    studentId: 3
  },
  {
    week: 9,
    studentId: 3
  },
  {
    week: 10,
    studentId: 3
  },
  {
    week: 11,
    studentId: 3
  },
  {
    week: 12,
    studentId: 3
  },
  {
    week: 13,
    studentId: 3
  },
  {
    week: 14,
    studentId: 3
  },
  {
    week: 15,
    studentId: 3
  },
  {
    week: 1,
    studentId: 4
  },
  {
    week: 2,
    studentId: 4
  },
  {
    week: 3,
    studentId: 4
  },
  {
    week: 4,
    studentId: 4
  },
  {
    week: 5,
    studentId: 4
  },
  {
    week: 6,
    studentId: 4
  },
  {
    week: 7,
    studentId: 4
  },
  {
    week: 8,
    studentId: 4
  },
  {
    week: 9,
    studentId: 4
  },
  {
    week: 10,
    studentId: 4
  },
  {
    week: 11,
    studentId: 4
  },
  {
    week: 12,
    studentId: 4
  },
  {
    week: 13,
    studentId: 4
  },
  {
    week: 14,
    studentId: 4
  },
  {
    week: 15,
    studentId: 4
  },
  {
    week: 1,
    studentId: 5
  },
  {
    week: 2,
    studentId: 5
  },
  {
    week: 3,
    studentId: 5
  },
  {
    week: 4,
    studentId: 5
  },
  {
    week: 5,
    studentId: 5
  },
  {
    week: 6,
    studentId: 5
  },
  {
    week: 7,
    studentId: 5
  },
  {
    week: 8,
    studentId: 5
  },
  {
    week: 9,
    studentId: 5
  },
  {
    week: 10,
    studentId: 5
  },
  {
    week: 11,
    studentId: 5
  },
  {
    week: 12,
    studentId: 5
  },
  {
    week: 13,
    studentId: 5
  },
  {
    week: 14,
    studentId: 5
  },
  {
    week: 15,
    studentId: 5
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weeks')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('weeks').insert(fake);
    });
};
