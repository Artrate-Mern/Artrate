const express = require("express");
const Artworks = require("../models/Artworks");
const router = express.Router();
// Request for all art work
router.get("/", (req, res) => {
  Artworks.find()
    .then((artwork) => res.json(artwork))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
// Add new Artwork
router.post("/new", (req, res) => {
  const newArtwork = new Artworks({
    title: req.body.title,
    image: req.body.image,
  });
  newArtwork
    .save()
    .then(() => res.json("New Artwork Posted"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
// Get single Art work
router.get("/:id", (req, res) => {
  Artworks.findById(req.params.id)
    .then((artwork) => res.json(artwork))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
