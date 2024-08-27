// Function to check if the passwords match
function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}

// Example usage
const password = "examplePassword";
const confirmPassword = "example"; // Change this value to test different cases

validatePassword(password, confirmPassword);
