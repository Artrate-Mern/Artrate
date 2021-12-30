const express = require('express');
const passport = require('passport');

const router = express.Router();

// Signup POST request
router.post(
  "/signup", 
  passport.authenticate('signup', { session: false }),
  async(req, res, next) => {
    res.json({
      message: "Signup Sucessful!",
      user: req.user
    });
  }
);




module.exports = router;