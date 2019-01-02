const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// auth specific, i think. At least for now
const passport = require('passport');
const cookieSession = require('cookie-session');

// cutom application specific section
// keys and config files
const keys = require('./config/keys.js');
const passportSetup = require('./config/passport-setup');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const app = express();

// auth
app.use(cookieSession({
  // cookie valid one day
  maxAge: 24*60*60*1000,
  keys:[keys.session.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mLabMongo.dbURI, { useNewUrlParser: true }, () => {
  // this should be a proper winston log
  console.log('connected to mongod');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

module.exports = app;
