const campaignService = require("../services/campaign.service");

function listCampaigns(req, res) {
  const campaigns = campaignService.getAllCampaigns();

  return res.json(campaigns);
}

function getCampaign(req, res) {
  const campaign = campaignService.getCampaignById(req.params.id);

  if (!campaign) {
    return res.status(404).json({
      success: false,
      message: "Campanha não encontrada."
    });
  }

  return res.json(campaign);
}

function createCampaign(req, res) {
  const campaign = campaignService.createCampaign(req.body);

  return res.status(201).json(campaign);
}

function addProduct(req, res) {
  const { id, productId } = req.params;

  const result = campaignService.addProductToCampaign(id, productId);

  return res.status(201).json(result);
}

function removeProduct(req, res) {
  const { id, productId } = req.params;

  campaignService.removeProductFromCampaign(id, productId);

  return res.status(204).send();
}

module.exports = {
  listCampaigns,
  getCampaign,
  createCampaign,
  addProduct,
  removeProduct
};