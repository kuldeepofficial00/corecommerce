const Inventory = require('../models/Inventory');
const StockMovement = require('../models/StockMovement');
exports.adjustStock = async (productId, warehouseId, qty, reason) => { await Inventory.findOneAndUpdate({ product: productId, warehouse: warehouseId }, { $inc: { onHand: qty } }, { upsert: true }); await StockMovement.create({ product: productId, warehouse: warehouseId, quantity: qty, movementType: 'ADJUSTMENT', reasonCode: reason }); };
