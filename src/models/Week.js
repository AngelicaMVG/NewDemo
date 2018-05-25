const { Model } = require("objection");

class Week extends Model {
  static get tableName() {
    return "weeks";
  }
  static get relationMappings() {
    const Student = require("./Student.js");
    const Days = require("./Days.js");

    return {
      student: {
        relation: Model.BelongsToOneRelation,
        modelClass: Student,
        join: {
          from: "weeks.studentId",
          to: "student.id"
        }
      },
      days: {
        relation: Model.HasManyRelation,
        modelClass: Days,
        join: {
          from: "weeks.id",
          to: "days.weekId"
        }
      }
    };
  }
}

module.exports = Week;
