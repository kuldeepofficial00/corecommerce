const mongoose = require('mongoose');
const invSchema = new mongoose.Schema({ product: mongoose.Schema.Types.ObjectId, warehouse: mongoose.Schema.Types.ObjectId, onHand: { type: Number, default: 0 }, reserved: { type: Number, default: 0 }, safetyStock: { type: Number, default: 10 } }, { timestamps: true });
invSchema.index({ product: 1, warehouse: 1 }, { unique: true });
module.exports = mongoose.model('Inventory', invSchema);
