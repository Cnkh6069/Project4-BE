const rewardsController = require("../controllers/rewardsController");
const express = require("express");
const router = express.Router();

// GET all rewards
router.get("/rewards", rewardsController.getRewards);
// GET a single reward
router.get("/rewards/:id", rewardsController.getRewardById);
// CREATE a new reward
router.post("/rewards", rewardsController.createReward);
// UPDATE a reward
router.put("/rewards/:id", rewardsController.updateReward);
// DELETE a reward
router.delete("/rewards/:id", rewardsController.deleteReward);
module.exports = router;
