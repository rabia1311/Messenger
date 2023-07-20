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
module.exports = {
  createSendMessage,
};
