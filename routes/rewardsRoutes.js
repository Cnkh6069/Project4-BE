const rewardsController = require("../controllers/rewardsController.js");
const express = require("express");
const router = express.Router();

// GET all rewards
router.get("/", rewardsController.getRewards);
// CREATE a new reward
router.post("/", rewardsController.createReward);
// UPDATE a reward
router.put("/:id", rewardsController.updateRewardById);
// DELETE a reward
router.delete("/:id", rewardsController.deleteRewardById);
module.exports = router;
