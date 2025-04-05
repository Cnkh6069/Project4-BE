const { User, Redemption } = require("../models");

//Get all Redemption records in paginated format
const getPaginatedRedemptionList = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 20) || 1;
    const limit = 20;
    const offset = (page - 1) * limit;
    const { count, rows } = await Redemption.findAndCountAll({
      limit,
      offset,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName", "email"],
        },
      ],
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
    console.error("Error fetching Redemption Records:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//create a new Redemption record
const createRedemption = async (req, res) => {
  try {
    const { userId, rewardId, quantity } = req.body;
    const newRedemption = await Redemption.create({
      userId,
      rewardId,
      quantity,
    });
    res.status(201).json(newRedemption);
  } catch (error) {
    console.error("Error creating Redemption Record:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//delete a Redemption record
const deleteRedemption = async (req, res) => {
  try {
    const { id } = req.params.id;
    const redemption = await Redemption.findByPk(id);
    if (!redemption) {
      return res.status(404).json({ message: "Redemption record not found" });
    }
    await redemption.destroy();
    res.status(200).json({ message: "Redemption record deleted successfully" });
  } catch (error) {
    console.error("Error deleting Redemption Record:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getPaginatedRedemptionList,
  createRedemption,
  deleteRedemption,
};
