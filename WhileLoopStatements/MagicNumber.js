const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 and 100, and I'll guess it!");

let low = 1, high = 100;
let found = false;

const guessNumber = () => {
    while (low <= high && !found) {
        let mid = Math.floor((low + high) / 2);
        
        rl.question(`Is your number ${mid}? (yes/higher/lower): `, (answer) => {
            answer = answer.toLowerCase();

            if (answer === "yes") {
                console.log(`Great! Your magic number is ${mid}.`);
                found = true;
                rl.close();
            } else if (answer === "higher") {
                low = mid + 1;
            } else if (answer === "lower") {
                high = mid - 1;
            } else {
                console.log("Invalid response! Please type 'yes', 'higher', or 'lower'.");
            }

            if (!found) {
                guessNumber();
            }
        });
        break; // Prevent infinite loop inside readline
    }
};

// Start guessing
guessNumber();