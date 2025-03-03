// Fetching the package
const readline = require('readline');

// Creating the interface for taking input and output
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// Taking input
rl.question("Enter the year: ", (year) => {
    // Logic check for leap year
    if(year % 400 == 0) {
        console.log(year, "is a leap year.");
    } else if(year % 4 == 0 && year % 100 != 0) {
        console.log(year, "is a leap year.")
    } else {
        console.log(year, "is not a leap year.")
    }

    // Closing the resource
    rl.close();
})