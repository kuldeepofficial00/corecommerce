exports.getWholesalePrice = (basePrice, qty) => qty >= 50 ? basePrice * 0.85 : basePrice;
