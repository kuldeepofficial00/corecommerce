const { generateWave } = require('../services/wavePicking');
exports.getPickWave = (req, res) => res.json(generateWave(req.body.orderIds));
