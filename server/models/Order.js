const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({ orderNumber: { type: String, unique: true }, customer: mongoose.Schema.Types.ObjectId, items: [{ product: mongoose.Schema.Types.ObjectId, quantity: Number, unitPrice: Number }], status: { type: String, enum: ['PENDING', 'ALLOCATED', 'PICKED', 'PACKED', 'SHIPPED', 'CANCELLED'], default: 'PENDING' }, grandTotal: Number }, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);
