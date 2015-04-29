var users = require('../controllers/user.server.controller');

//Build base for angular, implement routes in a REST manner.
module.exports = function(app) {
  app.route('/users')
    .post(users.create)
    .get(users.list);
};