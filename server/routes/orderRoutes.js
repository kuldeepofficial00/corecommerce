const express = require('express');
const router = express.Router();
router.post('/', require('../controllers/orderController').createOrder);
module.exports = router;
