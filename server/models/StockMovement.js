const mongoose = require('mongoose');
module.exports = mongoose.model('StockMovement', new mongoose.Schema({ product: mongoose.Schema.Types.ObjectId, warehouse: mongoose.Schema.Types.ObjectId, quantity: Number, movementType: { type: String, enum: ['INBOUND', 'OUTBOUND', 'TRANSFER', 'ADJUSTMENT'] }, reasonCode: String }, { timestamps: true }));
