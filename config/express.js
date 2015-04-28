var express = require('express'), morgan = require('morgan'), compress = require('compression'),
    bodyParser = require('body-parser'), methodOverride = require('method-override'),
    lessMiddleware = require('less-middleware')('./public');

module.exports = function () {

  var app = express();

  console.info("Application started at : ", new Date());

  if (process.env.NODE_ENV === 'development') {
    console.info('Running application in "DEVELOPMENT" mode');
    app.use(morgan('dev'));
    app.use(lessMiddleware);
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
    console.info('Running application in "PRODUCTION" mode');
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json({
    inflate: true
  }));
  app.use(methodOverride());

  //setup your view engine her
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  //setup your routes here
  app.use(express.static('./public'));
  require('../app/routes/index.server.routes.js')(app);

  return app;
};