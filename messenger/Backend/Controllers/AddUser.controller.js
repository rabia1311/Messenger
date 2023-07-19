const AddUser = require("../Models/AddUser");
const createAddUser = async (req, res) => {
  try {
    const image = req.file?.filename;
    const newAddUser = new Restaurant({
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
module.exports = {
  createAddUser,
};
