const Transfer = require('../models/Transfer');
exports.createTransfer = async (req, res) => res.status(201).json(await Transfer.create(req.body));
