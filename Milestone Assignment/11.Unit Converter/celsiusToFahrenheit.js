// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Formula to convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Example usage:
let celsiusTemperature = 25; // Example Celsius temperature
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
