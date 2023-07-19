const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://rabiasultana:chatapp@cluster0.fmil89z.mongodb.net/Backend";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

module.exports = connectToMongoDB;
