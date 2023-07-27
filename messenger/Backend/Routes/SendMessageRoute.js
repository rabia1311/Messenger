// Import necessary modules
const express = require("express");
const router = express.Router();

// Import the sendMessageController
const sendMessageController = require("../Controllers/SendMessage.controller"); // Replace with the actual path to your sendMessageController file

// Create the POST route to send a message to a particular _i
router.route("/send/:id").post(sendMessageController);

// Export the router
module.exports = router;
