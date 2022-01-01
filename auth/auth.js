const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

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

// Handles User Login
passport.use(
  'login',
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if(!user) {
          return done(null, false, { message: "The email or password you entered is incorrect" });
        }

        const validate = await user.isValidPassword(password);

        if(!validate) {
          return done(null, false, { message: "The email or password you entered is incorrect" });
        }
        return done(null, user, { message: "Login Successful" });
      } catch (error) {
        return done(error);
      }
    }
  )
);


// FIXME Verifying the JWT
passport.use(
  new JWTstrategy(
    {
      secretOrKey: "TOP_SECRET",
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
    },
    async(token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);