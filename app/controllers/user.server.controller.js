var User = require('mongoose').model('User');

exports.create = function (req, res, next) {
  var user = new User(req.body);
  user.save(function (err) {
    if (err) {
      console.error('Error creating new user: ', req.body, err);
      return next(err);
    }else{
      console.log('User ', user, ' created at : ', new Date());
      return res.json(user);
    }
  });
};

//List all users
exports.list = function (req, res, next) {
  User.find({}, function (err, users) {
    if (err) {
      return next(err);
    }else {
      return res.json(users);
    }
  })
};
