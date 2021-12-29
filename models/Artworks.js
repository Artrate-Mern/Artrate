const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArtworkSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Artworks = mongoose.model("Artwork", ArtworkSchema);
module.exports = Artworks;
