const db = require("../database/database");

function findAll() {
  return db.prepare(`
    SELECT * FROM campaigns
    ORDER BY id DESC
  `).all();
}

function findById(id) {
  return db.prepare(`
    SELECT * FROM campaigns
    WHERE id = ?
  `).get(id);
}

function create(campaign) {
  const statement = db.prepare(`
    INSERT INTO campaigns (
      name,
      discount_percentage,
      start_time,
      end_time,
      enabled
    )
    VALUES (?, ?, ?, ?, ?)
  `);

  const result = statement.run(
    campaign.name,
    campaign.discountPercentage,
    campaign.startTime,
    campaign.endTime,
    campaign.enabled ?? 1
  );

  return findById(result.lastInsertRowid);
}

module.exports = {
  findAll,
  findById,
  create
};