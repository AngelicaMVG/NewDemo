const User = require('../models/User.js');

exports.handleRegisterRes = function(req, res) {
  const newUser = res.locals.newUser;
  const previousUser = res.locals.user;

  if (previousUser) {
    return res.status(403).json('User email alteady exists');
  }

  if (!newUser) {
    return res.status(403).json(res.locals.newUser);
  }

  delete newUser.password;
  return res.status(200).json(newUser);
};

exports.handleLoginRes = (req, res) => {
  res.json(req.user);
};

exports.handleCurrentAuthRes = (req, res) => {
  const user = req.user || {};
  res.status(200).json(user);
};

exports.handleLogoutRes = (req, res) => {
  const user = req.user;

  req.logout();
  req.session = null;
  res.status(200).json({ loggedOut: true, user });
};
