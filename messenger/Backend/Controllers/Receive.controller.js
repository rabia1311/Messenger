const Mongoose = require("mongoose");
const Receive = require("../Models/Receive");
const Receivemsgcontroller = async (req, res) => {
  try {
    const { id } = req.params; // The _id of the recipient (receiver)
    const { content } = req.body; // The content of the message sent in the request body

    // Assuming you have some authentication mechanism, you can get the sender's ObjectId from the authenticated user
    // For this example, let's assume it's stored in req.user.id
    const receiverId = "64c2135cac8c608dca5e88d9";

    // Create a new message document
    const newMessag = new Receive({
      receiver: receiverId,
      content: content,
      chat: id,
    });

    // Save the message to the database
    const savedMessag = await newMessag.save();

    res.status(201).json(savedMessag); // Respond with the saved message (you can customize the response as needed)
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Error sending message" });
  }
};

const ViewMessagesController = async (req, res) => {
  try {
    const { id } = req.params; // The _id of the recipient (receiver)

    // Assuming you have some authentication mechanism, you can get the receiver's ObjectId from the authenticated user
    // For this example, let's assume it's stored in req.user.id
    const receiverId = "64c2135cac8c608dca5e88d9"; // Replace this with your receiver's ObjectId retrieval mechanism

    // Query the messages with the given chat id and receiver id
    const messages = await Receive.find({ chat: id, receiver: receiverId });

    res.status(200).json(messages); // Respond with the messages (you can customize the response as needed)
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ error: "Error retrieving messages" });
  }
};

module.exports = {
  Receivemsgcontroller,
  ViewMessagesController,
};
