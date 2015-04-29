var config = require('./config'),
  mongoose = require('mongoose');
module.exports = function () {
  var db = mongoose.connect(config.db);
  //Register user model
  require('../app/models/user.server.model');
  console.log('User model is registered');

  console.log('Mongoose configuration loaded');
  return db;
};