const mongoose = require('mongoose');
module.exports = mongoose.model('WarehouseSettings', new mongoose.Schema({ warehouse: mongoose.Schema.Types.ObjectId, autoAllocate: Boolean, defaultCarrier: String }));
