const mongoose = require('mongoose');
module.exports = mongoose.model('PurchaseOrder', new mongoose.Schema({ poNumber: String, supplier: String, items: Array, status: { type: String, default: 'DRAFT' } }, { timestamps: true }));
