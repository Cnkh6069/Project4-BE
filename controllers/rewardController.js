const { rewards } = require("../models");

//get all rewards
const getRewards = async (req, res) => {
  try {
    const rewardsList = await rewards.findAll();
    res.status(200).json(rewardsList);
  } catch (error) {
    console.error("Error fetching rewards:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//create a new reward
const createReward = async (req, res) => {
  try {
    const { name, creditRequired } = req.body;
    const newReward = await rewards.create({
      name,
      creditRequired,
    });
  } catch (error) {
    console.error("Error creating reward:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//update a reward by ID
const updateRewardById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, creditRequired } = req.body;
    const reward = await rewards.findByPk(id);
    if (!reward) {
      return res.status(404).json({ message: "Reward not found" });
    }
    await reward.update({ name, creditRequired });
    res.status(200).json(reward);
  } catch (error) {
    console.error("Error updating reward:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//delete a reward by ID
const deleteRewardById = async (req, res) => {
  try {
    const { id } = req.params;
    const reward = await rewards.findByPk(id);
    if (!reward) {
      return res.status(404).json({ message: "Reward not found" });
    }
    await reward.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting reward:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getRewards,
  createReward,
  updateRewardById,
  deleteRewardById,
};
