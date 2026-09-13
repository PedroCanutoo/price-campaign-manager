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

function update(id, campaign) {
  const statement = db.prepare(`
    UPDATE campaigns
    SET
      name = ?,
      discount_percentage = ?,
      start_time = ?,
      end_time = ?,
      enabled = ?,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `);

  const result = statement.run(
    campaign.name,
    campaign.discountPercentage,
    campaign.startTime,
    campaign.endTime,
    campaign.enabled,
    id
  );

  if (result.changes === 0) {
    return null;
  }

  return findById(id);
}

function remove(id) {
  const result = db.prepare(`
    DELETE FROM campaigns
    WHERE id = ?
  `).run(id);

  return result.changes > 0;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};