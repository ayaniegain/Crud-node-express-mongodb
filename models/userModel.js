const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "name is required"],
    },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
