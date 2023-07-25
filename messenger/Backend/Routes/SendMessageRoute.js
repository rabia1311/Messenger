const express = require("express");
const multer = require("multer");

const router = express.Router();
const Storage = multer.diskStorage({
  destination: "Images/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
});

const {
  createSendMessage,
  getSendMessage,
  getChatConversationByUserId,
  createSendMessagebyid,
} = require("../Controllers/SendMessage.controller");
const SendMessage = require("../Models/SendMessage");

router.post("/sendmsg", upload.single("image"), createSendMessage);
router.get("/sendmsg", getSendMessage);

// New route to fetch chat conversation by user _id
router.get("/sendmsg/:userId", getChatConversationByUserId);
router.post("/sendmsg/:userId", upload.single("image"), createSendMessagebyid);

module.exports = router;
