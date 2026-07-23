const express = require("express");
const statusController = require("../controllers/status.controller");

const router = express.Router();

router.get("/", statusController.showStatus);

module.exports = router;