// Function to calculate the total bill and bill per person
function calculateBill(dishCosts, numberOfPeople) {
    // Calculate the total bill by summing the cost of each dish
    let totalBill = dishCosts.reduce((sum, cost) => sum + cost, 0);
    
    // Calculate the bill per person
    let billPerPerson = totalBill / numberOfPeople;

    // Return the total bill and bill per person as an object
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example usage:
let dishCosts = [500, 800, 1200, 450]; // Array of dish costs
let numberOfPeople = 4; // Number of people sharing the bill
let billDetails = calculateBill(dishCosts, numberOfPeople);

console.log(`Total Bill: Rs. ${billDetails.totalBill}/-`);
console.log(`Bill Per Person: Rs. ${billDetails.billPerPerson.toFixed(2)}/-`);
