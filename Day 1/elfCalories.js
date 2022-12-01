const fs = require('fs');

// Part 1

// Grab Elf Calorie data from file and split into array seperated by empty lines
const elves = fs.readFileSync('puzzleInput.txt', 'utf8')
    .replace(/\r/g, '') // Remove carriage returns
    .trim() // Remove trailing newline
    .split('\n\n'); // Split into array by empty lines

// Create array of arrays of calories
let calories = elves.map(elf => elf.split('\n'));

// Sum up calories carried by each elf
let summedCalories = calories.map(elf => elf.reduce((total, cal) => total + parseInt(cal), 0));

// Part 2

// Find highest calorie value
console.log(`The highest individual calorie value is: ${Math.max(...summedCalories)}`);

// Find the top 3 highest calorie values and sum them
let topThree = summedCalories.sort((a, b) => b - a).slice(0, 3);
console.log(`The top three calorie values are: ${topThree}`);
console.log(`The total sum of the top 3 is: ${topThree.reduce((a, b) => a + b)}`);