const Order = require('../models/Order');
exports.createOrder = async (req, res) => res.status(201).json(await Order.create(req.body));
