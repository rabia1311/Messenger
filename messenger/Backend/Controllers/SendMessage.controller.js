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

module.exports = {
  createSendMessage,
  getSendMessage,
};
