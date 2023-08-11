const express = require("express");
const router = express.Router();
const { getUserData,createUser,postUserData,getUser,getsingleuser,updateUser,deleteUser} = require("../controllers/userCtrl");

//routers

//CREATE NEW USERS
router.post("/create-users", createUser);

//GET ALL USERS
router.get("/read-users", getUser);

// GET SINGLE USER

router.get("/read-user/:id",getsingleuser);

// UPDATE USER
router.put("/update-user/:id",updateUser);

// DELETE USER
router.delete("/delete-user/:id",deleteUser);



//get
router.get("/", getUserData);

//post
router.post("/", postUserData);

//extorts routes
module.exports = router;
