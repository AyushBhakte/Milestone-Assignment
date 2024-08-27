function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Cannot divide by zero");
                return;
            }
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`Result: ${result}`);
}

// Example usage
calculator(10, 5, '+'); // Output: Result: 15
calculator(10, 5, '-'); // Output: Result: 5
calculator(10, 5, '*'); // Output: Result: 50
calculator(10, 5, '/'); // Output: Result: 2
calculator(10, 0, '/'); // Output: Cannot divide by zero
calculator(10, 5, '%'); // Output: Invalid operator

