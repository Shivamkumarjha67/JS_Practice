function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

let headsCount = 0;
let tailsCount = 0;
const winningScore = 11;

while (headsCount < winningScore && tailsCount < winningScore) {
    let result = flipCoin();
    
    if (result === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Flipped: ${result} | Heads: ${headsCount}, Tails: ${tailsCount}`);
}

console.log(`Game Over! ${(headsCount === winningScore) ? "Heads" : "Tails"} wins 11 times!`);