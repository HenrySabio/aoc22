const fs = require('fs');
// Grab Elf Calorie data from file and split into array seperated by empty lines
const elves = fs.readFileSync('puzzleInput.txt', 'utf8')
    .toString() // Remove carriage returns
    .trim() // Remove trailing newline
    .split('\n\n'); // Split into array by empty lines

// Create array of arrays of calories
let calories = elves.map(elf => elf.split('\n'));

// Sum up calories for each elf
let summedCalories = calories.map(elf => {
    let total = 0;
    elf.forEach(cal => { // For each cal
        total += parseInt(cal); // Add to total
    });
    return total;
});

// Find highest calorie value
console.log(Math.max(...summedCalories));

// Find the top 3 highest calorie values and sum them
let topThree = summedCalories.sort((a, b) => b - a).slice(0, 3);
console.log(topThree.reduce((a, b) => a + b));
