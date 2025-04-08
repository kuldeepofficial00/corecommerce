const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/v1/orders', require('./routes/orderRoutes'));
module.exports = app;
