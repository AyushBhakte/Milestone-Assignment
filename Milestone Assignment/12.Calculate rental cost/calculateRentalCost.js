// Function to calculate rental cost
function calculateRentalCost(daysRented, carType) {
    let costPerDay;

    // Determine the cost per day based on car type
    switch(carType.toLowerCase()) {
        case 'economy':
            costPerDay = 4000;
            break;
        case 'midsize':
            costPerDay = 10000;
            break;
        case 'luxury':
            costPerDay = 20000;
            break;
        default:
            return "Invalid car type";
    }

    // Calculate the total cost
    let totalCost = costPerDay * daysRented;
    return totalCost;
}

// Example usage:
let daysRented = 5; // Number of days the car is rented
let carType = 'Luxury'; // Type of car rented
let rentalCost = calculateRentalCost(daysRented, carType);

console.log(`The total rental cost for ${daysRented} days in a ${carType} car is Rs. ${rentalCost}/-`);
