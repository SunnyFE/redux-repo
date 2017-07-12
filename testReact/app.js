let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let routes = require('./routes/index');
let app = express();
let deployPath = process.env.deployPath || '';

const PORT = 5689;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(deployPath, express.static(path.join(__dirname, 'public')));
app.use(deployPath, routes);

app.use(function (req, res, next) {
  var err = new Error('Not Found' + path.join(__dirname, 'public'));
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  if (err.status === 404) {
    res.render('404', {
      url: req.originalUrl
    });
  } else {
    res.render('error', {
      message: err.message,
      error: {}
    });
  }
});


app.listen(PORT, () => {
  console.log('strat server http://localhost:' + PORT);
});

module.exports = app;