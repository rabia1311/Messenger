// Import necessary modules
const express = require("express");
const router = express.Router();

// Import the sendMessageController
const {
  sendMessageController,
  getMessagesController,
} = require("../Controllers/SendMessage.controller"); // Replace with the actual path to your sendMessageController file

// Create the POST route to send a message to a particular _i
router.post("/send/:senderId/:receiverId", sendMessageController);
router.get("/messages", getMessagesController);

//Routes for receiver messages -

// Export the router
module.exports = router;
