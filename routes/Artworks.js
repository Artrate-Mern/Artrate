const express = require("express");
const Artwork = require("../models/Artworks");
const router = express.Router();
// Request for all art work
router.get("/", (req, res) => {
  Artwork.find()
    .then((artwork) => res.json(artwork))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
// Add new Artwork
router.post("/new", (req, res) => {
  const newArtwork = new Artwork({
    title: req.body.title,
    image: req.body.authorname
  });
  newArtwork
    .save()
    .then(() => res.json("New Artwork Posted"))
    .catch((err) => res.status(400).json(`Error: ${err}`))
});

module.exports = router;