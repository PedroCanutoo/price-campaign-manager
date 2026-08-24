const express = require("express");
const statusRoutes = require("./status.routes");
const productRoutes = require("./product.routes");
const campaignRoutes = require("./campaign.routes");

const router = express.Router();

router.use("/status", statusRoutes);
router.use("/products", productRoutes);
router.use("/campaigns", campaignRoutes);

module.exports = router;