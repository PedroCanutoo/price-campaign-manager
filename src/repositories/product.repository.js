const db = require("../database/database");

function findAll() {
  return db.prepare(`
    SELECT * FROM products
    ORDER BY id DESC
  `).all();
}

function findById(id) {
  return db.prepare(`
    SELECT * FROM products
    WHERE id = ?
  `).get(id);
}

function create(product) {
  const statement = db.prepare(`
    INSERT INTO products (
      ml_item_id,
      title,
      base_price,
      current_price,
      status
    )
    VALUES (?, ?, ?, ?, ?)
  `);

  const result = statement.run(
    product.mlItemId,
    product.title,
    product.basePrice,
    product.currentPrice,
    product.status
  );

  return findById(result.lastInsertRowid);
}

module.exports = {
  findAll,
  findById,
  create
};  