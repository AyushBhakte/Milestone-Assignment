function printInvertedTriangle(rows) {
    // Loop through the number of rows, starting from the given number down to 1
    for (let i = rows; i > 0; i--) {
        // Print a row with i asterisks
        console.log('*'.repeat(i));
    }
}

// Example usage with i = 6
let i = 6;
printInvertedTriangle(i);
