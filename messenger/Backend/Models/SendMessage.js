const mongoose = require("mongoose");
const { Schema } = mongoose;

const SendMessageSchema = new Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat_id: { type: Number }, // Add the chat_id field to the schema
  },
  { timestamps: true }
);

const SendMessage = mongoose.model("SendMessage", SendMessageSchema);
module.exports = SendMessage;
