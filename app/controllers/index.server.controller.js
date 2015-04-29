exports.render = function (req, res) {

  var response = {
    lastVisited: null,
    title: 'Welcome to MEAN development',
    message: 'This is the message of web developers',
    details: 'Start using MEAN technology to develop better, faster and elegant web application by one using one language, JavaScript.'
  };

  if (req.session.lastVisited) {
    response.lastVisited = req.session.lastVisited;
  } else {
    response.lastVisited = 'Welcome, Are you ready to be a MEAN developer?.'
  }

  req.session.lastVisited = 'Last time I saw you on : ' + new Date() + ', are you MEAN enough?';

  res.render('index', response);

};
