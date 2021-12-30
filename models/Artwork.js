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
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Artwork", ArtworkSchema);

