const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Signup POST request
router.post(
  "/signup", 
  passport.authenticate("signup", { session: false }),
  async(req, res, next) => {
    res.json({
      message: "Signup Sucessful!",
      user: req.user
    });
  }
);

// FIXME Login POST request (https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport)
router.post(
  "/login",
  async(req, res, next) => {
    passport.authenticate(
      "login", 
      async(err, user, info) => {
        try {
          if (err || !user) {
            const error = new Error("An error occured.");
            console.log("LOGIN ROUTE", error)
            return next(error);
          }
          req.login(
            user, {session: false},
            async(error) => {
              if (error) return next (error);

              const body = {_id: user._id, email: user.email};
              const token = jwt.sign({user: body}, "TOP_SECRET");

              return res.json({token});
            }
          );
        } catch(error) {
          return next(error);
        }
      }
    ) (req, res, next);
  }
);


module.exports = router;