const mongoose = require('mongoose');
module.exports = async () => mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/corecommerce');
