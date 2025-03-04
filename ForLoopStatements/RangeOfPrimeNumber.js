const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Ask for range input
rl.question("Enter the start number: ", (start) => {
    rl.question("Enter the end number: ", (end) => {
        start = parseInt(start);
        end = parseInt(end);

        if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
            console.log("Please enter a valid range (start >= 2 and start <= end).");
        } else {
            let primes = [];
            for (let i = start; i <= end; i++) {
                if (isPrime(i)) primes.push(i);
            }

            console.log(`Prime numbers between ${start} and ${end}: ${primes.join(", ")}`);
        }

        rl.close();
    });
});