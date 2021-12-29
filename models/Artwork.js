const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArtworkSchema = new Schema(
  {
    title: { type: string, required: true },
    artworkimage: { type: string, required: true },
  },
  { timestamps: true }
);

const Artwork = mongoose.model("Artwork", ArtworkSchema);
module.exports = Artwork;
