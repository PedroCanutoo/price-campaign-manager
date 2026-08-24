const productService = require("../services/product.service");

function listProducts(req, res) {
  const products = productService.getAllProducts();

  return res.json(products);
}

function getProduct(req, res) {
  const product = productService.getProductById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Produto não encontrado."
    });
  }

  return res.json(product);
}

function createProduct(req, res) {
  const product = productService.createProduct(req.body);

  return res.status(201).json(product);
}

module.exports = {
  listProducts,
  getProduct,
  createProduct
};