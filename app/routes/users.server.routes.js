var users = require('../controllers/user.server.controller');

//Build base for angular, implement routes in a REST manner.
module.exports = function(app) {
  app.route('/users')
    .post(users.create)
    .get(users.list);

  app.route('/users/:userId')
      .get(users.read);
  app.param('userId', users.userById);

};