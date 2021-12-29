const express = require("express");
const Artwork = require("../models/Artwork");
const router = express.Router();
// Request for all art work
router.get("/", (req, res) => {
  Artwork.find()
    .then((artwork) => res.json(artwork))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});