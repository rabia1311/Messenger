// sendMessageModel.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const SendMessageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      default: "64ba6b4ac7455df39573f949", // Set the default sender ID
      ref: "AddUser", // Reference the AddUser model
    },
    recipientId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "AddUser", // Reference the AddUser model
    },
    content: {
      type: String,
      trim: true,
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
