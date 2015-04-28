exports.render = function (req, res) {
  res.render('index', {
    date: new Date(),
    title: 'Welcome to MEAN development',
    message: 'This is the message of web developers',
    details: 'Start using MEAN technology to develop better, faster and elegant web application by one using one language, JavaScript.'
  });
};