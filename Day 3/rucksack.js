const fs = require('fs');

// Part 1

// Grab rucksacks and items - separate by line
const rucksacks = fs.readFileSync('puzzleInput.txt', 'utf8')
    .replace(/\r/g, '') // Remove carriage returns
    .trim() // Remove trailing newline
    .split('\n'); // Split into array by empty lines


const prioritizeRucksacks = (rucksacks) => {
    let priorityTotal = 0;
    const rucksackMap = rucksacks.map(rucksack => {
        const [halfOne, halfTwo] = splitArray(rucksack);;
        const match = findMatch(halfOne, halfTwo);

        findPosition(match[0]);

        priorityTotal += findPosition(match[0]);
    });
    return priorityTotal
}

// Splits array into two equal parts
function splitArray(arr) {
    const halfIndex = Math.floor(arr.length / 2);

    // split the array in half
    const firstHalf = arr.slice(0, halfIndex).split('');
    const secondHalf = arr.slice(halfIndex).split('');

    // return the two halves as separate variables
    return [firstHalf, secondHalf];
}

// find matching string in 2 arrays
function findMatch(arr1, arr2) {
    return arr1.filter(letter => arr2.includes(letter));
}

// Finds position of letter in alphabet
// No need to define an array or string of the alphabet and corresponding index value
function findPosition(letter) {
    // get the Unicode code point of the letter
    const codePoint = letter.charCodeAt(0);

    if (letter === letter.toUpperCase()) {
        return codePoint - 38; // Capital letter values start at 27 and end at 52
    } else {
        return codePoint - 96; // Lowercase letter values start at 1 and end at 26
    }
}

console.log(prioritizeRucksacks(rucksacks));

