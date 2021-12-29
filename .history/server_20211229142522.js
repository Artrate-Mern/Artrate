const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.Port || 3001;
app.use(cors());
app.use(express.json());