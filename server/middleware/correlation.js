module.exports = (req, res, next) => { req.id = 'TX-' + Date.now(); next(); };
