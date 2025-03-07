const mongoose = require('mongoose');
module.exports = mongoose.model('Warehouse', new mongoose.Schema({ name: String, code: { type: String, unique: true }, address: Object, active: { type: Boolean, default: true } }, { timestamps: true }));
