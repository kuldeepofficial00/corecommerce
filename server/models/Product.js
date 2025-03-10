const mongoose = require('mongoose');
module.exports = mongoose.model('Product', new mongoose.Schema({ sku: { type: String, unique: true }, title: String, description: String, basePrice: Number, wholesalePrice: Number, moq: { type: Number, default: 1 } }, { timestamps: true }));
