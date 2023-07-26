// sendMessageModel.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const SendMessageSchema = new Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "AddUser" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "AddUser" }],
  },
  { timestamps: true }
);
const SendMessage = mongoose.model("SendMessage", SendMessageSchema);
module.exports = SendMessage;
