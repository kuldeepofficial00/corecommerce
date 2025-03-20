const { adjustStock } = require('../services/stockService');
exports.adjust = async (req, res) => { await adjustStock(req.body.productId, req.body.warehouseId, req.body.quantity, req.body.reason); res.status(200).json({ success: true }); };
