const productRepository = require("../repositories/product.repository");

function getAllProducts() {
  return productRepository.findAll();
}

function getProductById(id) {
  return productRepository.findById(id);
}

function createProduct(productData) {
  return productRepository.create(productData);
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct
};