const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Main function to check both prime and palindrome prime
function checkPrimeAndPalindrome(num) {
    if (!isPrime(num)) {
        console.log(`${num} is NOT a prime number.`);
        return;
    }

    let palindrome = getPalindrome(num);
    console.log(`${num} is a prime number. Its palindrome is ${palindrome}.`);

    if (isPrime(palindrome)) {
        console.log(`The palindrome ${palindrome} is ALSO a prime number.`);
    } else {
        console.log(`The palindrome ${palindrome} is NOT a prime number.`);
    }
}

// Taking user input
rl.question("Enter a number: ", (input) => {
    let number = parseInt(input);
    
    if (isNaN(number)) {
        console.log("Invalid input! Please enter a valid number.");
    } else {
        checkPrimeAndPalindrome(number);
    }

    rl.close();
});