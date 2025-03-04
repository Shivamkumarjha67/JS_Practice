const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number (a): ", (a) => {
    rl.question("Enter second number (b): ", (b) => {
        rl.question("Enter third number (c): ", (c) => {
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            // Perform operations
            let result1 = a + b * c;
            let result2 = a % b + c;
            let result3 = c + a / b;
            let result4 = a * b + c;

            console.log(`1. a + b * c = ${result1}`);
            console.log(`2. a % b + c = ${result2}`);
            console.log(`3. c + a / b = ${result3}`);
            console.log(`4. a * b + c = ${result4}`);

            // Find max and min
            let results = [result1, result2, result3, result4];
            let max = Math.max(...results);
            let min = Math.min(...results);

            console.log(`Maximum value: ${max}`);
            console.log(`Minimum value: ${min}`);

            rl.close();
        });
    });
});
