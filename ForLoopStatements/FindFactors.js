const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find prime factors
function primeFactors(N) {
    let factors = [];

    // Divide N by 2 until it's odd
    while (N % 2 === 0) {
        factors.push(2);
        N = N / 2;
    }

    // Check odd factors from 3 to √N
    for (let i = 3; i * i <= N; i += 2) {
        while (N % i === 0) {
            factors.push(i);
            N = N / i;
        }
    }

    // If N is still a prime number greater than 2
    if (N > 2) {
        factors.push(N);
    }

    return factors;
}

// Take input from user
rl.question("Enter a number: ", (num) => {
    num = parseInt(num);

    if (isNaN(num) || num <= 1) {
        console.log("Please enter a valid number greater than 1.");
    } else {
        console.log(`Prime factors of ${num}: ${primeFactors(num).join(", ")}`);
    }

    rl.close();
});