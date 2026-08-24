const campaignRepository = require("../repositories/campaign.repository");
const campaignProductRepository = require("../repositories/campaign-product.repository");

function getAllCampaigns() {
  return campaignRepository.findAll();
}

function getCampaignById(id) {
  const campaign = campaignRepository.findById(id);

  if (!campaign) {
    return null;
  }

  campaign.products =
    campaignProductRepository.findProductsByCampaign(id);

  return campaign;
}

function createCampaign(campaignData) {
  return campaignRepository.create(campaignData);
}

function addProductToCampaign(campaignId, productId) {
  return campaignProductRepository.addProduct(campaignId, productId);
}

function removeProductFromCampaign(campaignId, productId) {
  return campaignProductRepository.removeProduct(campaignId, productId);
}

module.exports = {
  getAllCampaigns,
  getCampaignById,
  createCampaign,
  addProductToCampaign,
  removeProductFromCampaign
};