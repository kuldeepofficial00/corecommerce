const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/v1/products', require('./routes/productRoutes'));
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'));
module.exports = app;
