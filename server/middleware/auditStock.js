const Audit = require('../models/AuditLog');
module.exports = (req, res, next) => { Audit.create({ action: 'STOCK_ADJUSTMENT', details: req.body }); next(); };
