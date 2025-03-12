const jwt = require('jsonwebtoken');
exports.sign = (payload) => jwt.sign(payload, process.env.JWT_SECRET || 'corecommerce_jwt_secret', { expiresIn: '14d' });
