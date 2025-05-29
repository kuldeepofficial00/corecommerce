const express = require('express');
const router = express.Router();
router.get('/velocity', require('../controllers/analyticsController').getVelocity);
module.exports = router;
