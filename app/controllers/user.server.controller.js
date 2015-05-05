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

exports.read = function (req, res) {
  res.json(req.user);
};

//Find only one user by userName
exports.userByUserName = function (req, res, next, userName) {
  User.findOne({uesrName : userName}, function (err, user) {
    if (err) {
      return next(err);
    }else {
      req.user = user;
      next();
    }
  });
};

//Find only one user by userId
exports.userById = function (req, res, next, id) {
  User.findOne({_id : id}, function (err, user) {
    if (err) {
      return next(err);
    }else {
      req.user = user;
      next();
    }
  });
};

//Find only one user by userId
exports.userByEmail = function (req, res, next, email) {
  User.findOne({email : email}, function (err, user) {
    if (err) {
      return next(err);
    }else {
      req.user = user;
      next();
    }
  });
};
