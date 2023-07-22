const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChatmsgSchema = new Schema(
  {
    chatname: {
      type: String,
      trim: true,
    },
    isGroupchat: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AddUser",
      },
    ],

    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SendMessage",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddUser",
    },
  },
  { timestamps: true }
);

const ChatModel = mongoose.model("ChatModel", ChatmsgSchema);
module.exports = ChatModel;
