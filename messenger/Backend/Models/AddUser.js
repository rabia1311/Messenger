const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddUserSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "active", // Set the default status as "active"
    },
  },
  {
    timestamps: true,
  }
);

const AddUser = mongoose.model("AddUser", AddUserSchema);
module.exports = AddUser;
