const Mongoose = require("mongoose");
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

// GET the conversations by particular _id .

const getMessagesByIdController = async (req, res) => {
  try {
    const { sender_id, receiver_id } = req.params; // The _id of the recipient (receiver)

    // Find all messages where the chat field matches the provided _id
    // const messages = await SendMessage.find({ chat: id }).exec();

    const messages = await SendMessage.aggregate([
      {
        $match: {
          $or: [
            {
              sender: new Mongoose.Types.ObjectId(sender_id),
              chat: new Mongoose.Types.ObjectId(receiver_id),
            },
            {
              sender: new Mongoose.Types.ObjectId(receiver_id),
              chat: new Mongoose.Types.ObjectId(sender_id),
            },
          ],
        },
      },
      {
        $group: {
          _id: "$createdAt",
          chat: {
            $first: "$$ROOT.content",
          },
          sender: {
            $first: "$sender",
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "sender",
          foreignField: "_id",
          as: "user",
          pipeline: [
            {
              $project: {
                name: 1,
                _id: -1,
              },
            },
          ],
        },
      },
      {
        $unwind: {
          path: "$user",
        },
      },
    ]);

    res.status(200).json(messages); // Respond with the array of messages
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Error fetching messages" });
  }
};

// Export the controller function
module.exports = {
  sendMessageController,
  getMessagesByIdController,
};
