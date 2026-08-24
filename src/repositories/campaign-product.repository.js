const db = require("../database/database");

function addProduct(campaignId, productId) {
  const statement = db.prepare(`
    INSERT INTO campaign_products (
      campaign_id,
      product_id
    )
    VALUES (?, ?)
  `);

  statement.run(campaignId, productId);

  return {
    campaignId,
    productId
  };
}

function findProductsByCampaign(campaignId) {
  return db.prepare(`
    SELECT products.*
    FROM products
    INNER JOIN campaign_products
      ON products.id = campaign_products.product_id
    WHERE campaign_products.campaign_id = ?
  `).all(campaignId);
}

function removeProduct(campaignId, productId) {
  return db.prepare(`
    DELETE FROM campaign_products
    WHERE campaign_id = ?
      AND product_id = ?
  `).run(campaignId, productId);
}

module.exports = {
  addProduct,
  findProductsByCampaign,
  removeProduct
};