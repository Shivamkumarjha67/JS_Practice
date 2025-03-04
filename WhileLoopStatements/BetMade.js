let money = 100;
const goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;

    if (Math.random() < 0.5) {
        // Lost the bet
        money--;
    } else {
        // Won the bet
        money++;
        wins++;
    }
    
    console.log(`Bet: ${bets}, Money: ₹${money}, Wins: ${wins}`);
}

console.log("\nGame Over!");
console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(money === 0 ? "Gambler is Broke!" : "Gambler Reached the Goal! 🎉");