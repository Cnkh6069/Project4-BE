const redemptionController = require("../controllers/redemptionController.js");

const router = require("express").Router();
//GET ALL
router.get("/", redemptionController.getPaginatedRedemptionList);
//CREATE
router.post("/", redemptionController.createRedemption);
//delete
router.delete("/:id", redemptionController.deleteRedemption);

module.exports = router;
