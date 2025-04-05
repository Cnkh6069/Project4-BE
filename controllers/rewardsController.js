const { Reward } = require("../models");

//get all rewards
const getRewards = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;
    const { count, rows } = await Reward.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });
    const totalPages = Math.ceil(count / limit);
    res.status(200).json({
      data: rows,
      meta: {
        currentPage: page,
        totalPages,
        totalItems: count,
      },
    });
  } catch (error) {
    console.error("Error fetching rewards:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//create a new reward
const createReward = async (req, res) => {
  try {
    const { name, creditRequired } = req.body;
    const newReward = await Reward.create({
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
    const reward = await Reward.findByPk(id);
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
    const reward = await Reward.findByPk(id);
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
