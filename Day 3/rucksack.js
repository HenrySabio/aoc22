const fs = require('fs');

// Part 1

// Grab rucksacks and items - separate by line
const rucksacks = fs.readFileSync('puzzleInput.txt', 'utf8')
    .replace(/\r/g, '') // Remove carriage returns
    .trim() // Remove trailing newline
    .split('\n'); // Split into array by empty lines


const prioritizeRucksacks = (rucksacks) => {
    let priorityTotal = 0;
    // Go through each rucksack
    const rucksackMap = rucksacks.map(rucksack => {
        // Split each rucksack into two compartments
        const [halfOne, halfTwo] = splitArray(rucksack);
        // Find matching item between both compartments
        const match = findMatch(halfOne, halfTwo);
        // Find priorty value of matching item
        findPosition(match[0]);
        // Add priority value to total
        priorityTotal += findPosition(match[0]);
    });
    // Return sum of priority values of all items in rucksacks
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

// find matching string in 2 arrays (or 3 arrays)
function findMatch(arr1, arr2, arr3 = false) {
    if (arr3 === false) {
        return arr1.filter(letter => arr2.includes(letter));
    } else {
        return arr1.filter(letter => arr2.includes(letter) && arr3.includes(letter));
    }
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

// Part 2

const prioritizeRucksackGroups = (rucksacks) => {
    let priorityTotal = 0;

    // Go through rucksacks in groups of 3
    for (let i = 0; i < rucksacks.length; i += 3) {
        // Create group of 3 rucksacks
        const rucksackGroup = rucksacks.slice(i, i + 3);
        // Find matching item between all 3 rucksacks
        const matchingBadge = findMatch(rucksackGroup[0].split(''), rucksackGroup[1].split(''), rucksackGroup[2].split(''));
        // Find priority value of matching item
        findPosition(matchingBadge[0]);
        // Add priority value of item to total
        priorityTotal += findPosition(matchingBadge[0]);
    }
    // Return sum of priority values of all matching items in rucksack groups
    return priorityTotal;
}

console.log(prioritizeRucksackGroups(rucksacks));