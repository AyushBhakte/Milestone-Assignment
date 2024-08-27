// Arrow function to calculate the total cost of items in a cart
const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
};

// Example usage:
const customerCart = [
    { unitPrice: 100, quantity: 2 },
    { unitPrice: 250, quantity: 1 },
    { unitPrice: 50, quantity: 4 }
];

const totalCost = calculateTotalCost(customerCart);
console.log(`Total Cost: Rs. ${totalCost}/-`);
