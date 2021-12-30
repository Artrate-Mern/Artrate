const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

// Handles User Signup
passport.use(
  'signup',
  new localStrategy(
    {
      
    }
  )
)