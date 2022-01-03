const express = require("express");

const cors = require("cors");
const dbConfig = require("./Backend/config/db.config");
const app = express();
app.use(cors());
require("dotenv").config();
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./Backend/models");
const Role = db.role;

const path = `mongodb+srv://${process.env.DB_Name}:${process.env.DB_PASS}@artratecluster.idrku.mongodb.net/ArtrateDatabase?retryWrites=true&w=majority`;
db.mongoose
  .connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "hellow world." });
});

// routes
require("./Backend/routes/auth.routes")(app);
require("./Backend/routes/user.routes")(app);
const artworkRouter = require("./Backend/controllers/artwork_controller");
app.use("/artworks", artworkRouter);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
