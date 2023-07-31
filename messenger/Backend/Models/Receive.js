const mongoose = require("mongoose");
const { Schema } = mongoose;
const ReceiveSchema = new Schema(
  {
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);
const Receive = mongoose.model("ReceiveMessage", ReceiveSchema);
module.exports = Receive;
