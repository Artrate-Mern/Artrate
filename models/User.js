const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema(
  {
    username: { 
      type: String, 
      // required: true,
      unique: true,
    },
    email: { 
      type: String, 
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }, 
    avatar: {
      type: String,
      default: "https://i.imgur.com/8nSplR4.png",
		},
    bio: {
      type: String,
      maxLength: 250,
    },
    // artwork: [{
    //   type: Schema.Types.ObjectId,
    //   ref: "Artwork",
    // }],
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

UserSchema.pre(
  'save',
  async function(next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
  }
);

// Checks user credentials 
UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}

module.exports = User;



