const usersController = require("../controllers/usersController");

const express = require("express");
const router = express.Router();

//get all users
router.get("/", usersController.getAllUsers);
router.get("/auth/:auth0Id", usersController.getUserByAuth0Id);
router.put("/:id", usersController.updateUserById);

router.post("/", usersController.createUser);

module.exports = router;
