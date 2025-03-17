const Product = require('../models/Product');
exports.getProducts = async (req, res) => res.json(await Product.find());
exports.createProduct = async (req, res) => res.status(201).json(await Product.create(req.body));
