module.exports = Array.from({ length: 100 }, (_, i) => ({ sku: `SKU-PRO-${i + 1}`, onHand: (i + 1) * 20 }));
