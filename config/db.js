const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectSuccess = await mongoose.connect(
      "mongodb://127.0.0.1/expressjs"
    );
    console.log(`Mongo db connected ${connectSuccess.connection.host}`);
  } catch (error) {
    console.log(`Mongo db error ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
