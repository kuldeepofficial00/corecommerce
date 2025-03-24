const mongoose = require('mongoose');
module.exports = mongoose.model('Customer', new mongoose.Schema({ companyName: String, contactEmail: String, wholesaleTier: { type: String, enum: ['TIER_1', 'TIER_2', 'VIP_DISTRIBUTOR'], default: 'TIER_1' }, creditLimit: Number }, { timestamps: true }));
