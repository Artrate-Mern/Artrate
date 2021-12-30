const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.Port || 3001;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB connection established seccessfully!")
);
const artworkRouter = require("./controllers/Artwork_controllers");
app.use("/artworks", artworkRouter);

app.listen(port, () => console.log(`The  ArtRate is running on Port: ${port}`));
