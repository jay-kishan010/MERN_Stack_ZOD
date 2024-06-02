const mongoose = require("mongoose");


const URL = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("database connection fail");

    process.exit(0);
  }
};

module.exports = connectDB;
