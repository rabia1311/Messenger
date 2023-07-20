const mongoose = require("mongoose");
const SendMessageSchema = new mongoose.Schema({
  senderid: {
    type: String,
    required: true,
  },
  receiverid: {
    type: String,
    required: true,
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
    required: true,
  },
});
const SendMessage = mongoose.model("SendMessage", SendMessageSchema);
module.exports = SendMessage;
