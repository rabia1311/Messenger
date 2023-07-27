const SendMessage = require("../Models/SendMessage");
const Chat = require("../Models/ChatModel");

// Controller function to send a message to a particular user
exports.SendMessage = async (req, res) => {
  try {
    const { sender, receiver, content } = req.body;

    // Check if the chat between sender and receiver already exists
    let chat = await Chat.findOne({
      users: { $all: [sender, receiver] },
    });

    if (!chat) {
      // If the chat doesn't exist, create a new one
      chat = new Chat({
        users: [sender, receiver],
      });
    }

    // Create the message
    const message = new SendMessage({
      sender,
      content,
      chat: chat._id,
    });

    // Update the chat's latestMessage field
    chat.latestMessage = message._id;

    // Save the message and update the chat
    await Promise.all([message.save(), chat.save()]);

    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Error sending message:", err);
    res
      .status(500)
      .json({ error: "An error occurred while sending the message" });
  }
};

// Controller function to get all messages sent to a particular user
exports.getMessagesForUser = async (req, res) => {
  try {
    const receiverId = req.params.userId;

    // Find all messages sent to the specified user
    const messages = await SendMessage.find({ readBy: receiverId });

    res.status(200).json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching messages" });
  }
};
