const fs = require('fs');
// Grab Elf Calorie data from file and split into array seperated by empty lines
const elves = fs.readFileSync('puzzleInput.txt', 'utf8')
    .replace(/\r/g, '') // Remove carriage returns
    .trim() // Remove trailing newline
    .split('\n\n'); // Split into array by empty lines

console.log(elves);

