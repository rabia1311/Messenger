const mongoose = require("mongoose");
const { Schema } = mongoose;

const SendMessageSchema = new Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat_id: { type: String },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const SendMessage = mongoose.model("SendMessage", SendMessageSchema);
module.exports = SendMessage;
