const Mongoose = require("mongoose");
const SendMessage = require("../Models/SendMessage");
const User = require("../Models/User");

const sendMessageController = async (req, res) => {
  const { senderId, receiverId } = req.params;
  const { content } = req.body;

  try {
    // Assume you have the User model imported and ready to use to fetch the sender and receiver details.
    // Fetch sender and receiver from the User model
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(404).json({ error: "Sender or receiver not found." });
    }

    // Create the message
    const message = await SendMessage.create({
      sender: senderId,
      content,
      receiver: receiverId,
      chat_id: "1234",
      readBy: [],
    });

    return res.status(201).json(message);
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({ error: "Something went wrong." });
  }
};

//GET the all the messages by chat_id

const getMessagesController = async (req, res) => {
  try {
    const chatId = 1234; // The desired chat_id

    // Query the database to fetch all messages with chat_id = 64356
    const messages = await SendMessage.find({ chat_id: chatId });

    res.status(200).json(messages); // Respond with the fetched messages
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Error fetching messages" });
  }
};

// GET the conversations by particular _id .

// Export the controller function
module.exports = {
  sendMessageController,
  getMessagesController,
};
