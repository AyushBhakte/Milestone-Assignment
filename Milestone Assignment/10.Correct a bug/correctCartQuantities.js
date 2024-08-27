function correctCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of each item
        cart[i] = cart[i] * 2;
    }
    return cart;
}

// Example usage
let cartQuantities = [2, 3, 5, 7, 1];
let correctedCart = correctCartQuantities(cartQuantities);
console.log("Corrected cart quantities:", correctedCart);