const express = require('express');
const router = express.Router();
router.post('/waves', require('../controllers/fulfillmentController').getPickWave);
module.exports = router;
