const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

// Handles User Signup
passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      try {
        const user = await User.create({ email, password });
        
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);