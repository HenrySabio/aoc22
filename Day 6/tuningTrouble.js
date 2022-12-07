const fs = require('fs');

// Part 1

// Grab signal - separate by line
const signal = fs.readFileSync('puzzleInput.txt', 'utf8')
    .trim(); // remove trailing newline

function packetSniffer(signal, packetSize) {
    let position = 0;

    // Loop through signal
    for (let i = 0; i < signal.length; i++) {
        let currentSet = signal.slice(i, i + packetSize); // grab amount of characters defined starting with current index
        let uniqueChars = []; // array to hold unique characters

        // Loop through current set - check for uniqueness
        for (let j = 0; j < currentSet.length; j++) {
            let char = currentSet[j]; // current character in current set

            // If the current character from the set is not in the uniqueChars array, it is unique (for now)
            if (!uniqueChars.includes(char)) {
                uniqueChars.push(char); // add to uniqueChars array
                if (uniqueChars.length === packetSize) { // if we have specified unique characters, we have our answer
                    position = signal.indexOf(uniqueChars.join('')) + packetSize; // add packetSize to the index of the first unique character - gives us the position of the first marker
                    return position;
                }
            } else { // if the current character already exists in the uniqueChars array, the current set contains a duplicate and is not unique
                uniqueChars = []; // reset array
                break; // break out of loop - try next set
            }
        }
    }
}

console.log(packetSniffer(signal, 4));
console.log(packetSniffer(signal, 14));
