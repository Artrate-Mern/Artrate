const mongoose = require("mongoose");

const connection =  async () => {
  try {
    const connect = await mongoose.connect(process.env.ATLAS_URI)
    console.log(`MongoDB connection established successfully! ${connect.connection.host}`)
  } catch (err) {
    console.log(`Connection unsuccessful, ${err}`)
  }
};

// TODO: GOOGLE THIS!
mongoose.Promise = global.Promise;

module.exports = connection;