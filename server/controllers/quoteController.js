const { getWholesalePrice } = require('../services/pricingEngine');
exports.quote = (req, res) => res.json({ unitPrice: getWholesalePrice(req.body.basePrice, req.body.quantity) });
