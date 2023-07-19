const mongoose = require("mongoose");
const AddUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
});
const AddUser = mongoose.model("AddUser", AddUserSchema);
module.exports = AddUser;
