const mongoose = require('mongoose');
const pSchema = new mongoose.Schema({ sku: { type: String, unique: true }, title: String, basePrice: Number, wholesalePrice: Number });
pSchema.index({ sku: 1, title: 'text' });
module.exports = mongoose.model('Product', pSchema);
