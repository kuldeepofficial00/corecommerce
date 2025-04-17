exports.seed = () => Array.from({ length: 100 }, (_, i) => ({ sku: `SKU-IND-${1000 + i}`, title: `Component Part #${i + 1}`, basePrice: 45.0 }));
