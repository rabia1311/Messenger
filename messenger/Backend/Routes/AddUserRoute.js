const express = require("express");
const multer = require("multer");

const router = express.Router();
const Storage = multer.diskStorage({
  destination: "Userimg/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
});
const {
  createAddUser,
  getAddUser,
} = require("../Controllers/AddUser.controller");
const AddUser = require("../Models/AddUser");
router.post("/adduser", upload.single("image"), createAddUser);
router.get("/adduser", getAddUser);
module.exports = router;
