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