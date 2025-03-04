const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const placeValues = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Ten Lakh",
    10000000: "Crore",
    100000000: "Ten Crore"
};

rl.question("Enter a number (1, 10, 100, 1000, etc.): ", (input) => {
    let number = parseInt(input);

    if (placeValues[number]) {
        console.log(`The place value is: ${placeValues[number]}`);
    } else {
        console.log("Invalid input! Please enter numbers like 1, 10, 100, 1000...");
    }

    rl.close();
});