const mongoose = require('mongoose');
module.exports = mongoose.model('AuditLog', new mongoose.Schema({ user: String, action: String, details: Object }, { timestamps: true }));
