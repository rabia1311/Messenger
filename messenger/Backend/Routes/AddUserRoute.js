const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  getAllUsers,
} = require("../Controllers/AddUser.controller");
const { get } = require("mongoose");

const router = express.Router();

router.route("/register").post(registerUser).get(allUsers);
router.route("/getuser").get(getAllUsers);
router.route("/login").post(authUser);
module.exports = router;
