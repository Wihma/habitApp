const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user');


passport.serializeUser((user, done) => {
  // null is the error callback
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // null is the error callback
  User.findById(id).then((user) => {
      done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    // options for the strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret

  }, (accessToken, refreshToken, profile, done) => {
      // Check if user already exists in our db
      console.log(profile);
      User.findOne({
        googleId: profile.id
      }).then((currentUser) => {
        if(currentUser) {
          // user exists
          console.log('user is' + currentUser);
          done(null, currentUser);
        } else {
          new User({
            username: profile.displayName,
            googleId: profile.id,
            thumbnail: profile._json.image.url
          }).save().then((newUser) => {
            console.log('new user created ' + newUser);
            done(null, newUser);
          });
        }
      });
    })
);
