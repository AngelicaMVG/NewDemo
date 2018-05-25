const { Model } = require('objection');

class Days extends Model {
  static get tableName() {
    return 'days';
  }
  static get relationMappings() {
    const Week = require('./Week.js');
    const Student = require('./Student.js');

    return {
      week: {
        relation: Model.BelongsToOneRelation,
        modelClass: Week,
        join: {
          from: 'days.weekId',
          to: 'weeks.id'
        }
      },
      student: {
        relation: Model.HasManyRelation,
        modelClass: Student,
        join: {
          from: 'days.studentId',
          to: 'student.id'
        }
      }
    };
  }
}

module.exports = Days;
