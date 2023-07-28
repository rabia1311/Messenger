// Import necessary modules
const express = require("express");
const router = express.Router();

// Import the sendMessageController
const {
  sendMessageController,
  getMessagesByIdController,
} = require("../Controllers/SendMessage.controller"); // Replace with the actual path to your sendMessageController file

// Create the POST route to send a message to a particular _i
router.route("/send/:id").post(sendMessageController);
router.route("/list/:sender_id/:receiver_id").get(getMessagesByIdController);

//Routes for receiver messages -

// Export the router
module.exports = router;
