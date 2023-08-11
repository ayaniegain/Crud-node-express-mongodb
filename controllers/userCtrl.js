const userModel = require("../models/userModel");

const getUserData = (req, res) => {
  res.json({
    success: true,
    message: `fetch user data`,
  });
};

const postUserData = (req, res) => {
  const { inputData } = req.body;

  res.json({
    success: true,
    message: `welcome to ${inputData}`,
  });
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.log(`error occured on ${error}`);
    res.status(404).json({
      message: false,
      error,
    });
  }
};
// get all user
const getUser = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(201).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
      msg: "get all user error",
    });
  }
};

const getsingleuser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user) {
      res.status(201).json({
        message: " user find successfully",
        user,
      });
    } else {
      res.status(404).send("user not found");
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
      msg: "get  user error",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }
      const updatedUser = await user.save();
      res.status(201).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
      msg: "update  user error",
    });
  }
};

const deleteUser = async (req, res) => {
    const user = await userModel.findById(req.params.id);
    if (user) {
      await user.deleteOne();

      res.status(201).json({
        success: true,
        message: " user delete successfully",
      });
    } else {
      console.log("error block")
      res.status(400);
      throw new Error("User not found");
    }  
};
module.exports = {
  getUserData,
  postUserData,
  createUser,
  getUser,
  getsingleuser,
  updateUser,
  deleteUser,
};
