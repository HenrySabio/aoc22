const fs = require('fs');

// Part 1

// Grab rock paper scissors play data - separate by line
const plays = fs.readFileSync('puzzleInput.txt', 'utf8')
    .replace(/\r/g, '') // Remove carriage returns
    .trim() // Remove trailing newline
    .split('\n'); // Split into array by empty lines

const points = {
    'X': 1,
    'Y': 2,
    'Z': 3
};

const same = {
    'X': 'A',
    'Y': 'B',
    'Z': 'C'
}

// Create array of arrays of plays
let playArray = plays.map(play => play.split(' '));

const playGame = playArray.reduce((score, game) => score + scorePlay(game[0], game[1]), 0);
const playGameSpecial = playArray.reduce((score, game) => score + scorePlaySpecial(game[0], game[1]), 0);


function scorePlay(player1, player2) {
    const game = player1 + player2;

    if (player1 == same[player2]) { // Tie Scenario
        return 3 + points[player2];
    } else if (game == 'AY' || game == 'BZ' || game == 'CX') { // Win Scenario
        return 6 + points[player2];
    } else {
        return 0 + points[player2]; // All remaining scenarios result in losss
    }
}

function scorePlaySpecial(opponentMove, outcome) {
    const opponentMoves = ['A', 'B', 'C'];
    const playerMoves = ['X', 'Y', 'Z'];
    
    const modulator = outcome == 'X' ? -1 : outcome == 'Y' ? 0 : 1;
    const playerMove = playerMoves[(opponentMoves.indexOf(opponentMove) + modulator + 3) % 3];

    return scorePlay(opponentMove, playerMove);
}

console.log(`Part 1 score is: ${playGame}`);
console.log(`Part 2 score is: ${playGameSpecial}`);