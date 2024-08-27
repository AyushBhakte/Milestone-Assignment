function capitalizeFirstLetter(name) {
    // Check if the first letter is lowercase
    let modifiedName = (name.charAt(0) === name.charAt(0).toLowerCase()) 
        ? name.charAt(0).toUpperCase() + name.slice(1) 
        : name;

    // Return the modified or original name
    return modifiedName;
}

// Example usage
let userName = "john";
let capitalizedUserName = capitalizeFirstLetter(userName);
console.log(capitalizedUserName); // Output: John

userName = "Alice";
capitalizedUserName = capitalizeFirstLetter(userName);
console.log(capitalizedUserName); // Output: Alice
