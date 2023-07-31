const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

// Middleware to hash the password before saving a new user
userSchema.pre("save", async function (next) {
  // Only hash the password if it is being modified (or new)
  if (!this.isModified("password")) {
    return next();
  }

  try {
    // Generate a salt to add randomness to the hashed password
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the generated salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

// Creating a Default User.
userSchema.statics.addGuestUser = async function () {
  const defaultGuestEmail = "guest@example.com";
  const defaultGuestPassword = "guestPassword";

  const existingGuestUser = await this.findOne({ email: defaultGuestEmail });

  if (!existingGuestUser) {
    const guestUser = new this({
      name: "Guest",
      email: "guestuser123@gmail.com",
      password: "guestuser",
      pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    });

    await guestUser.save();
    console.log("Guest User created successfully.");
  } else {
    console.log("Guest User already exists.");
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
