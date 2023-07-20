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

//Get User by id.

const getAddUserid = (req, res, next) => {
  const adduserId = req.params.id;
  AddUser.findById(adduserId)
    .then((adduser) => {
      if (!adduser) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json({ adduser });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the user " });
    });
};

module.exports = {
  createAddUser,
  getAddUser,
  getAddUserid,
};
