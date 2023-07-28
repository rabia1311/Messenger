const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
} = require("../Controllers/AddUser.controller");
const { get } = require("mongoose");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/getuser").get(getAllUsers);
router.route("/login").post(loginUser);
module.exports = router;
