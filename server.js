const express = require("express");
const cors = require("cors");
const connection = require("./config/db");

require("dotenv").config();

connection();

const app = express();

const port = process.env.Port || 3001;

// SECTION Middlewares 
app.use(cors());
app.use(express.json());

// SECTION Routes
const artworkRouter = require("./controllers/artwork_controller");
app.use("/artworks", artworkRouter);

app.listen(port, () => console.log(`The Artrate is running on Port: ${port}`));