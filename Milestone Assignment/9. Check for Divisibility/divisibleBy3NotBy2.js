function printDivisibleBy3NotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        // If the number is divisible by 2, skip this iteration
        if (numbers[i] % 2 === 0) {
            continue;
        }
        
        // If the number is divisible by 3 and not by 2, print it
        if (numbers[i] % 3 === 0) {
            console.log(numbers[i]);
        }
    }
}

// Example usage
let numArray = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27];
printDivisibleBy3NotBy2(numArray);
