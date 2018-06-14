const { Model } = require('objection');

class Holidays extends Model {
  static get tableName() {
    return 'holidays';
  }
}

module.exports = Holidays;
