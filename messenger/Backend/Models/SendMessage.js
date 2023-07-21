const mongoose = require("mongoose");
const { Schema } = mongoose;

const SendMessageSchema = new Schema({
  senderid: {
    type: Schema.Types.ObjectId,
    default: "64ba6b4ac7455df39573f949", // Set the default sender ID
    ref: "AddUser", // Reference the AddUser model
  },
  receiverid: {
    type: Schema.Types.ObjectId, // Using ObjectId type
    ref: "AddUser", // Reference the AddUser model
  },
  message: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  status: {
    type: String,
  },
});

const SendMessage = mongoose.model("SendMessage", SendMessageSchema);
module.exports = SendMessage;
