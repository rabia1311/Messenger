const SendMessage = require("../Models/SendMessage");

const sendMessageController = async (req, res) => {
  try {
    const { id } = req.params; // The _id of the recipient (receiver)
    const { content } = req.body; // The content of the message sent in the request body

    // Assuming you have some authentication mechanism, you can get the sender's ObjectId from the authenticated user
    // For this example, let's assume it's stored in req.user.id
    const senderId = "64c212eec944ec0257b4c99c";

    // Create a new message document
    const newMessage = new SendMessage({
      sender: senderId,
      content: content,
      chat: id,
    });

    // Save the message to the database
    const savedMessage = await newMessage.save();

    res.status(201).json(savedMessage); // Respond with the saved message (you can customize the response as needed)
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Error sending message" });
  }
};

// Export the controller function
module.exports = sendMessageController;
