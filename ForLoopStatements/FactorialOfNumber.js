const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate factorial (iterative approach)
function factorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers.";
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

rl.question("Enter a number: ", (num) => {
    num = parseInt(num);

    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid non-negative number.");
    } else {
        console.log(`${num}! = ${factorial(num)}`);
    }

    rl.close();
});