function countVowels(name) {
    // Define the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Initialize the vowel count
    let vowelCount = 0;

    // Convert the name to lowercase to make the check case-insensitive
    name = name.toLowerCase();

    // Iterate through each character in the name
    for (let i = 0; i < name.length; i++) {
        // Check if the character is a vowel
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    // Return the total number of vowels found
    return vowelCount;
}

// Example usage
let userName = "Ayush";
let numberOfVowels = countVowels(userName);
console.log(`Number of vowels in the name "${userName}" is: ${numberOfVowels}`); // Output: 2

userName = "Akshay";
numberOfVowels = countVowels(userName);
console.log(`Number of vowels in the name "${userName}" is: ${numberOfVowels}`); // Output: 2

