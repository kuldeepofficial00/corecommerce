const mongoose = require('mongoose');
module.exports = mongoose.model('SupplierContract', new mongoose.Schema({ supplierName: String, discountTiers: Array }));
