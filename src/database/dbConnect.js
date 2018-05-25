const knex = require('knex')

function connectToDb(config){
  return knex(config)
}
module.exports = connectToDb
