const express = require("express");
const campaignController = require("../controllers/campaign.controller");

const router = express.Router();

router.get("/", campaignController.listCampaigns);
router.post("/", campaignController.createCampaign);

router.post("/:id/products/:productId", campaignController.addProduct);
router.delete("/:id/products/:productId", campaignController.removeProduct);

router.get("/:id", campaignController.getCampaign);

module.exports = router;