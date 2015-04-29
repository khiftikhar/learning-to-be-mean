var User = require('mongoose').model('User');

exports.create = function (req, res, next) {
  var user = new User(req.body);
  console.log('Request for creating user : ', user, ' received at : ', new Date());
  user.save(function (err) {
    if (err) {
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
