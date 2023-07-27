const express = require("express");
const router = express.Router();
const ChatController = require("../Controllers/ChatController");

// Route to send a message to a particular user
router.post("/send-message", ChatController.sendMessage);

// Route to get all messages sent to a particular user
router.get("/user-messages/:userId", ChatController.getMessagesForUser);

module.exports = router;
