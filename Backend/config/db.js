const mongoose = require("mongoose");

const connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.ATLAS_URI);
    console.log(
      `MongoDB connection established successfully! ${connect.connection.host}`
    );
  } catch (err) {
    console.log(`Connection unsuccessful, ${err}`);
  }
};

module.exports = connection;
