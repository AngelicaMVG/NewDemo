const User = require('../models/User.js')
const handleDbError = require('../helpers/handleDbError.js')

module.exports = async function saveNewUser(req, res, next){

  try {

    if(res.locals.user) return next()

    const newUser = await User
      .query()
      .insert(req.body)
      .returning('*')

    res.locals.newUser = newUser

    next()

  } catch (err){
    handleDbError(res, err)
  }

}
