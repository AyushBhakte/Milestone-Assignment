// Arrow function to calculate the percentage of the discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    let discount = originalPrice - discountedPrice;
    let discountPercentage = (discount / originalPrice) * 100;
    return discountPercentage.toFixed(2); // Round off to two decimal places
};

// Example usage:
const originalPrice = 1000; // Original price of the product
const discountedPrice = 800; // Discounted price of the product

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`Discount Percentage: ${discountPercentage}%`);
