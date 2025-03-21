const express = require('express');
const router = express.Router();
router.post('/adjust', require('../controllers/inventoryController').adjust);
module.exports = router;
