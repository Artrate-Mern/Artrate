const express = require("express");
const Artwork = require("../models/Artwork");
const router = express.Router();

// Request for all art work
router.get("/", async (req, res) => {
  try {
    const artworks = await Artwork.find();
    return res.status(200).json(artworks)

  } catch (err) {
    return res.status(500).json(`Error: ${err}`);
  }
});

// Add new Artwork
router.post("/new", async (req, res) => {
  try {
    const newArtwork = await Artwork.create(req.body);
    return res.status(201).json("New Artwork Posted")

  } catch (err) {
    return res.status(400).json(`Error: ${err}`);
  }
});

// Get single Art work
router.get("/:id", async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    return res.status(200).json(artwork);

  } catch (err) {
    return res.status(500).json(`Error: ${err}`)
  }
});

module.exports = router;
