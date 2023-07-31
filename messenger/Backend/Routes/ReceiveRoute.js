const express = require("express");
const router = express.Router();
const {
  Receivemsgcontroller,
  ViewMessagesController,
} = require("../Controllers/Receive.controller");

router.route("/receive/:id").post(Receivemsgcontroller);
router.route("/receive/:id").get(ViewMessagesController);
module.exports = router;
