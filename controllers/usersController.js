//userController.js
const { User } = require("../models");

//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// update user credits/rewards balance

const updateUserCredits = async (req, res) => {
  try {
    const { auth0Id } = req.params;
    const { rewards } = req.body;

    const user = await User.findOne({ where: { auth0Id } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.rewards = rewards;
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update user" });
  }
};
//get user by auth0 id
const getUserByAuth0Id = async (req, res) => {
  try {
    const auth0Id = req.params.auth0Id;
    const user = await User.findOne({ where: { auth0Id } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//update a User profile with a transaction
const updateUserById = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;
    const { userName, firstName, lastName, email, auth0Id } = req.body;
    const [update] = await User.update(
      { userName, firstName, lastName, email, auth0Id },
      { where: { id }, transaction }
    );
    if (update) {
      const updatedUser = await User.findByPk(id, { transaction });
      await transaction.commit();
      res.status(200).json(updatedUser);
    } else {
      await transaction.rollback();
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    await transaction.rollback();
    res
      .status(500)
      .json({ error: "Failed to update User", details: error.message });
  }
};
//create a new user
const createUser = async (req, res) => {
  try {
    const { auth0Id, userName, firstName, lastName, email } = req.body;

    // Validate required fields
    if (!auth0Id || !userName || !email) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      where: { auth0Id },
    });

    if (existingUser) {
      return res.status(409).json({
        error: "User already exists",
      });
    }

    const newUser = await User.create({
      auth0Id,
      userName,
      firstName: firstName || null,
      lastName: lastName || null,
      email,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      error: error.message || "Failed to create user",
    });
  }
};

//get user by id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  getUserByAuth0Id,
  updateUserById,
  createUser,
  updateUserCredits,
  getUserById,
};
