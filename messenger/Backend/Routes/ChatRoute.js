const express = require("express");
const router = express.Router();

const { accessChat } = require("../Controllers/ChatController");
router.route("/showchat").post(accessChat);
module.exports = router;
