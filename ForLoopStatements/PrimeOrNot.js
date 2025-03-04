const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (num) => {
    num = parseInt(num);

    if (isNaN(num) || num < 2) {
        console.log("Please enter a valid number greater than or equal to 2.");
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        console.log(`${num} is ${isPrime ? "a Prime Number" : "not a Prime Number"}`);
    }
    
    rl.close();
});