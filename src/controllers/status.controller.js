const statusService = require("../services/status.service");

function showStatus(req, res) {
    const status = statusService.getStatus();

    return res.json(status);
}

module.exports = {
    showStatus
};

