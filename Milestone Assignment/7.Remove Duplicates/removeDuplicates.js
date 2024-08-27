function removeDuplicates(cart) {
    // Use a Set to store unique items by converting each item to a string
    const uniqueItems = new Set(cart.map(item => JSON.stringify(item)));
    
    // Convert the Set back to an array of objects
    return Array.from(uniqueItems).map(item => JSON.parse(item));
}

// Example usage
let cart = [
    { id: 1, name: "apple", price: 1.00 },
    { id: 2, name: "banana", price: 0.50 },
    { id: 1, name: "apple", price: 1.00 },
    { id: 3, name: "orange", price: 0.75 },
    { id: 2, name: "banana", price: 0.50 }
];

let uniqueCart = removeDuplicates(cart);
console.log("Cart with duplicates removed:", uniqueCart);

// Output:
// Cart with duplicates removed: [
//   { id: 1, name: "apple", price: 1.00 },
//   { id: 2, name: "banana", price: 0.50 },
//   { id: 3, name: "orange", price: 0.75 }
// ]
