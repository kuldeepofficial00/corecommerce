const express = require('express');
const router = express.Router();
router.post('/', require('../controllers/poController').createPO);
module.exports = router;
