const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
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

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
function(req, email, password, done) {
    // hashSync
    // userfind wont fire unless data is sent back
    process.nextTick(function() {
      // find user whose mail is the same as the forms email
      // we are checking to see if the user trying to login already exists
      User.findOne({ 'local.email' : email }, function (err, user) {
        // if errors return error;
        if (err)
          return done(err);

        // check ti see if theres already a user with that email
        if(user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {
          let newUser = new User();

          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);

          newUser.save(function(err){
            if(err)
              throw err;
            return done(null, newUser);
          });
        }
      })
    });
}));


passport.use('google-signup',
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
