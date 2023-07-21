const mongoose = require("mongoose");
const SendMessageSchema = new mongoose.Schema({
  senderid: {
    type: String,
  },
  receiverid: {
    type: String,
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
