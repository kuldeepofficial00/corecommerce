const express = require('express');
const router = express.Router();
router.post('/', require('../controllers/quoteController').quote);
module.exports = router;
