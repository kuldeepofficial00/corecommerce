const mongoose = require('mongoose');
module.exports = mongoose.model('BinLocation', new mongoose.Schema({ warehouse: mongoose.Schema.Types.ObjectId, aisle: String, rack: String, shelf: String, bin: String }));
