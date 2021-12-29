const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.Port || 3001;
app.use(cors());
app.use(express.json());


app.listen(port, () => console.log(`The  ArtRate is running on Port: ${port}`));