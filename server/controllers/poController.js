const PO = require('../models/PurchaseOrder');
exports.createPO = async (req, res) => res.status(201).json(await PO.create(req.body));
