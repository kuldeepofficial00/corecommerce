const mongoose = require('mongoose');
const invSchema = new mongoose.Schema({ product: mongoose.Schema.Types.ObjectId, warehouse: mongoose.Schema.Types.ObjectId, onHand: Number });
invSchema.index({ onHand: 1 });
module.exports = mongoose.model('Inventory', invSchema);
