const asyncHandler = require("express-async-handler");
const User = require("../Models/User");
const bcrypt = require("bcrypt");

//    Register new user

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//Login user

const loginUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400);
    throw new Error("Please enter your email.");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found. Please check your email.");
  }

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    pic: user.pic,
  });
});
//get users
// Get all users

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password"); // Excluding the password field from the response

  res.status(200).json(users);
});

//Controller function to create guest user -:-

const createGuestUser = async (req, res) => {
  try {
    await User.addGuestUser(); // Calling the static method
    res.status(200).json({ message: "Guest User created successfully." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating Guest User.", error: err.message });
  }
};

module.exports = { registerUser, getAllUsers, loginUser, createGuestUser };
