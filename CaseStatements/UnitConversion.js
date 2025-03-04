const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Unit Conversion Menu:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

rl.question("Choose a conversion (1-4): ", (choice) => {
    rl.question("Enter the value to convert: ", (value) => {
        value = parseFloat(value);
        let result;

        switch (choice) {
            case "1":
                result = value * 12; // 1 Feet = 12 Inches
                console.log(`${value} Feet = ${result} Inches`);
                break;
            case "2":
                result = value * 0.3048; // 1 Feet = 0.3048 Meters
                console.log(`${value} Feet = ${result.toFixed(4)} Meters`);
                break;
            case "3":
                result = value / 12; // 1 Inch = 1/12 Feet
                console.log(`${value} Inches = ${result.toFixed(4)} Feet`);
                break;
            case "4":
                result = value / 0.3048; // 1 Meter = 1/0.3048 Feet
                console.log(`${value} Meters = ${result.toFixed(4)} Feet`);
                break;
            default:
                console.log("Invalid choice! Please enter a number between 1 and 4.");
        }

        rl.close();
    });
});
