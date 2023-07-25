const SendMessage = require("../Models/SendMessage");

//To send the Message We will use post method.

const createSendMessage = async (req, res) => {
  try {
    const image = req.file?.filename;
    const newSendMessage = new SendMessage({
      ...req.body,
      image,
    });
    const savedSendMessage = await newSendMessage.save();

    res.status(201).json({
      success: true,
      message: " Message sent successfully.",
      data: savedSendMessage,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "An error occured.",
    });
  }
};

// To view the messages sent by the sender
// We use GET METHOD

const getSendMessage = async (req, res) => {
  try {
    const sendmsg = await SendMessage.find(); // Retrieve plain JavaScript objects instead of Mongoose documents

    res.json(sendmsg);
  } catch (error) {
    res.status(500).json({ error: "Failed to send the msg" });
  }
};
// conversation by id.
const getChatConversationByUserId = async (req, res) => {
  try {
    const { _id } = req.params;

    // Fetch chat conversations where the provided userId matches either recipientUserId or senderUserId
    const chatConversation = await SendMessage.find({
      $or: [{ recipientId: _id }, { senderId: _id }],
    });

    res.status(200).json(chatConversation);
  } catch (error) {
    console.error("Error fetching chat conversation:", error);
    res.status(500).json({ error: "Error fetching chat conversation" });
  }
};

const createSendMessagebyid = async (req, res) => {
  try {
    const image = req.file?.filename;
    const newSendMessage = new SendMessage({
      ...req.body,
      image,
    });
    const savedSendMessage = await newSendMessage.save();

    res.status(201).json({
      success: true,
      message: " Message sent successfully.",
      data: savedSendMessage,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "An error occured.",
    });
  }
};
module.exports = {
  createSendMessage,
  getSendMessage,
  getChatConversationByUserId,
  createSendMessagebyid,
};
