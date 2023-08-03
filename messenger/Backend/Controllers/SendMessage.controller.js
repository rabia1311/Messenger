const Mongoose = require("mongoose");
const SendMessage = require("../Models/SendMessage");
const User = require("../Models/User");

const sendMessageController = async (req, res) => {
  const { senderId, receiverId } = req.params;
  const { content } = req.body;

  try {
    // Fetch sender and receiver from the User model
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(404).json({ error: "Sender or receiver not found." });
    }

    // Create a dynamic chat_id based on senderId and receiverId
    const chatId = `${senderId}_${receiverId}`;

    // Check if there is an existing conversation with this chat_id
    const existingConversation = await SendMessage.findOne({ chat_id: chatId });

    let message;
    if (existingConversation) {
      // If the conversation exists, add the message to the existing chat
      message = await SendMessage.create({
        sender: senderId,
        content,
        receiver: receiverId,
        chat_id: chatId,
        readBy: [],
      });
    } else {
      // If the conversation doesn't exist, create a new one
      message = await SendMessage.create({
        sender: senderId,
        content,
        receiver: receiverId,
        chat_id: chatId,
        readBy: [],
      });
    }

    return res.status(201).json(message);
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({ error: "Something went wrong." });
  }
};
//Get messages by chat_id

//GET the all the messages by chat_id

const getMessagesController = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;
    const chatId = `${senderId}_${receiverId}`; // The desired chat_id based on sender and receiver

    // Query the database to fetch all messages with the chat_id
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
