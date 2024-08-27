function findHighestMarks(marks) {
    // Assume the first student's marks are the highest initially
    let highestMarks = marks[0];

    // Iterate through the array to find the highest marks
    for (let i = 1; i < marks.length; i++) {
        // Use the ternary operator to update the highest marks if the current student's marks are higher
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    // Display the highest marks to the console
    console.log(`The highest marks scored by any student is: ${highestMarks}`);
}

// Example usage
const marks = [75, 88, 92, 67, 85];
findHighestMarks(marks); // Output: The highest marks scored by any student is: 92
