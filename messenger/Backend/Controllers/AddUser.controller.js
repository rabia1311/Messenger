const AddUser = require("../Models/AddUser");

// TO ADD USER WE WILL POST
const createAddUser = async (req, res) => {
  try {
    const image = req.file?.filename;
    const newAddUser = new AddUser({
      ...req.body,
      image,
    });
    const savedAddUser = await newAddUser.save();

    res.status(201).json({
      success: true,
      message: " User added successfully.",
      data: savedAddUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "An error occured.",
    });
  }
};

// TO SEE USER LIST WE ARE USING GET.

const getAddUser = async (req, res) => {
  try {
    const adduser = await AddUser.find(); // Retrieve plain JavaScript objects instead of Mongoose documents

    res.json(adduser);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch The user" });
  }
};

module.exports = {
  createAddUser,
  getAddUser,
};
