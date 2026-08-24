const db = require("./database");

function initializeDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ml_item_id TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      base_price REAL NOT NULL,
      current_price REAL NOT NULL,
      status TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS campaigns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      discount_percentage REAL NOT NULL,
      start_time TEXT NOT NULL,
      end_time TEXT NOT NULL,
      enabled INTEGER NOT NULL DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS campaign_products (
      campaign_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL UNIQUE,

      PRIMARY KEY (campaign_id, product_id),

      FOREIGN KEY (campaign_id)
        REFERENCES campaigns(id)
        ON DELETE CASCADE,

      FOREIGN KEY (product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS executions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      campaign_id INTEGER,
      action TEXT NOT NULL,
      status TEXT NOT NULL,
      products_updated INTEGER DEFAULT 0,
      error_message TEXT,
      executed_at DATETIME DEFAULT CURRENT_TIMESTAMP,

      FOREIGN KEY (campaign_id)
        REFERENCES campaigns(id)
        ON DELETE SET NULL
    );
  `);

  console.log("Banco de dados inicializado.");
}

module.exports = initializeDatabase;    