const express = require("express");
const cors = require("cors");
const connection = require("./config/db");
const passport = require('passport');
const bodyParser = require('body-parser');

const User = require("./models/User");

require("dotenv").config();

connection();

// Auth
require("./auth/auth");
const routes = require("./controllers/user_controller")
const secureRoute = require("./controllers/secure_controller")

const app = express();

const port = process.env.Port || 3001;

app.use(cors());
app.use(express.json());

// Auth Routes
app.use(bodyParser.urlencoded({ extended: false}));
app.use("/", routes);
app.use("/user", passport.authenticate('jwt', {session: false}), secureRoute);

const artworkRouter = require("./controllers/artwork_controller");
app.use("/artworks", artworkRouter);

// Error Handling
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({error: err});
});

app.listen(port, () => console.log(`The Artrate is running on Port: ${port}`));


