const mongoose = require('mongoose');
module.exports = mongoose.model('Transfer', new mongoose.Schema({ fromWarehouse: mongoose.Schema.Types.ObjectId, toWarehouse: mongoose.Schema.Types.ObjectId, items: Array, status: { type: String, default: 'IN_TRANSIT' } }, { timestamps: true }));
