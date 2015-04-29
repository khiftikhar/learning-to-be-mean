var
  config = require('./config'),
  express = require('express'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  lessMiddleware = require('less-middleware')('./public'),
  session = require('express-session');

module.exports = function () {

  var app = express();

  console.log('Express configuration is loaded');

  if (process.env.NODE_ENV === 'development') {
    console.info('Running express application in "DEVELOPMENT" mode');
    app.use(morgan('dev'));
    app.use(lessMiddleware);
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
    console.info('Running express application in "PRODUCTION" mode');
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

  //Add the session configuration settings here
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  //setup your routes here
  app.use(express.static('./public'));
  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/users.server.routes.js')(app);

  console.info("Express application started at : ", new Date());

  return app;
};