const express = require("express");
const path = require("path");
const statusRoutes = require("./routes/status.routes");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/status", statusRoutes);

module.exports = app;