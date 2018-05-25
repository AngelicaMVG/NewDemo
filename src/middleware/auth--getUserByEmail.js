const User = require('../models/User.js')
const handleDbError = require('../helpers/handleDbError.js')

module.exports = async function getUserByEmail(req, res, next){
  const reqBody = req.body

  try {
    const user = await User
      .query()
      .first()
      .where({ email: reqBody.email })
      .returning('*')
    
    res.locals.user = user
    next()

  } catch (err){
    return handleDbError(res, err)
  }

}
