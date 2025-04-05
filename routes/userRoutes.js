const userController = require("../controllers/userController");

const express = require("express");
const router = express.Router();

//get all users
router.get("/", userController.getAllUsers);
router.get("/auth/:auth0Id", usersController.getUserByAuth0Id);
router.put("/:id", usersController.updateUserById);
router.delete("/:id", usersController.deleteUserById);
router.post("/", usersController.createUser);

module.exports = router;
