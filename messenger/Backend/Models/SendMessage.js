const mongoose = require("mongoose");
const { Schema } = mongoose;

const SendMessageSchema = new Schema(
  {
    senderid: {
      type: Schema.Types.ObjectId,
      default: "64ba6b4ac7455df39573f949", // Set the default sender ID
      ref: "AddUser", // Reference the AddUser model
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChatModel",
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const SendMessage = mongoose.model("SendMessage", SendMessageSchema);
module.exports = SendMessage;
