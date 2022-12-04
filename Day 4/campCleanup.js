const fs = require('fs');

// Part 1

// Grab assignments - separate by line
const assignmentList = fs.readFileSync('puzzleInput.txt', 'utf8')
    .replace(/\r/g, '') // Remove carriage returns
    .trim() // Remove trailing newline
    .split('\n'); // Split into array by empty lines

// Split assignments into pairs
let assignmentPairs = assignmentList.map((pair) => {
    return pair.split(',');
});

// Begin overlap checking between assignment pairs
let overlap = (assignmentPairs) => {
    // Initial Overlap Count
    let overlaps = 0;

    // Loop through each pair
    assignmentPairs.map((pair) => {
        // Split each pair into own array
        let arr1 = rangeSpreader(pair[0]); // Create array containing all values in range
        let arr2 = rangeSpreader(pair[1]); // Create array containing all values in range

        // Check if either array is a subset of the other - add 1 to overlap count if true
        overlaps += checkOverlap(arr1, arr2);
    })
    return overlaps;
}

// Takes range and returns array of all values in range
function rangeSpreader(range) {
    let [start, end] = range.split('-').map(Number); // Split range into start and end values
    let rangeArray = []; // Create empty array to hold range values

    // Loop through range setting start and end point
    for (let i = start; i <= end; i++) {
        // Push each value into range array until all values within range are accounted for
        rangeArray.push(i);
    }
    return rangeArray; // Return completed array of all values within provided range
}

// Checks if either array is a subset of the other
function checkOverlap(arr1, arr2) {
    if (arr1.every(array => arr2.includes(array)) || arr2.every(array => arr1.includes(array))) {
        return 1; //If either array is a subset of the other, return 1
    } else {
        return 0; // If neither array is a subset of the other, return 0
    }
}

console.log(overlap(assignmentPairs));