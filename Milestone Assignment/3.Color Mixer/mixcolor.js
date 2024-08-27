function mixColors(color1, color2) {
    let result;

    // Normalize the colors to lowercase for consistency
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            result = "purple";
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            result = "orange";
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            result = "green";
            break;
        default:
            result = "Invalid color combination";
    }

    console.log(result);
}

// Example usage
mixColors("red", "blue");   // Output: purple
mixColors("yellow", "red"); // Output: orange
mixColors("blue", "yellow");// Output: green
mixColors("red", "green");  // Output: Invalid color combination
