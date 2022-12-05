const fs = require('fs');

// Part 1

// Grab assignments - separate by line
const moves = fs.readFileSync('puzzleInput.txt', 'utf8')
    .replace(/\r/g, '') // Remove carriage returns
    .trim() // Remove trailing newline
    .split('\n'); // Split into array by empty lines


let stacks = [
    ["C", "F", "B", "L", "D", "P", "Z", "S"],
    ["B", "W", "H", "P", "G", "V", "N"],
    ["G", "J", "B", "W", "F"],
    ["S", "C", "W", "L", "F", "N", "J", "G"],
    ["H", "S", "M", "P", "T", "L", "J", "W"],
    ["S", "F", "G", "W", "C", "B"],
    ["W", "B", "Q", "M", "P", "T", "H"],
    ["T", "W", "S", "F"],
    ["R", "C", "N"]
];


const rearrange = (moves) => {
    moves.map((move) => {
        let substrings = move.split(' ');
        let takeAmount = parseInt(substrings[1]);
        let fromArray = parseInt(substrings[3])-1;
        let toArray = parseInt(substrings[5])-1;

        // take takeAmount number of items from stacks[fromArray] and add to start of stacks[toArray]
        let takenItems = function () {
            let taken = [];
            for (let i = 0; i < takeAmount; i++) {
                taken.push(stacks[fromArray].shift());
            }
            return taken;
        }

        let taken = takenItems();
        stacks[toArray] = [...taken.reverse(), ...stacks[toArray]];

    })
    // let top equal the first value of each stack
    let top = stacks.map((stack) => {
        return stack[0];
    })

    console.log(top.toString().replace(/,/g, ''));
}

rearrange(moves);
