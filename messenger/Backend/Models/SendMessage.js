// sendMessageModel.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const SendMessageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      default: "64be2bee57905d1b5c496540", // Set the default sender ID
      ref: "AddUser", // Reference the AddUser model
    },
    recipientId: {
      type: Schema.Types.ObjectId,

      ref: "AddUser", // Reference the AddUser model
    },
    content: {
      type: String,
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
