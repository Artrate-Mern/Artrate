const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArtworkSchema = new Schema(
  {
    title: { 
      type: String, 
      required: [true, 'Please add a title.']
    },
    image: { 
      type: String, 
      required: [true, 'Please upload an image.'] 
    },
    description: { 
      type: String, 
      maxLength: 300
    },
  },
  { timestamps: true }
);

const Artwork = mongoose.model("Artwork", ArtworkSchema);
module.exports = Artwork;
