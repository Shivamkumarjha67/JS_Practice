const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(degC) {
    return (degC * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5/9;
}

// Ask user for conversion choice
rl.question("Choose conversion: \n1. Celsius to Fahrenheit \n2. Fahrenheit to Celsius\nEnter choice (1/2): ", (choice) => {
    
    switch (choice) {
        case "1":
            rl.question("Enter temperature in Celsius (0°C to 100°C): ", (tempC) => {
                tempC = parseFloat(tempC);
                if (tempC >= 0 && tempC <= 100) {
                    console.log(`Temperature in Fahrenheit: ${celsiusToFahrenheit(tempC).toFixed(2)}°F`);
                } else {
                    console.log("Invalid input! Enter a value between 0°C and 100°C.");
                }
                rl.close();
            });
            break;

        case "2":
            rl.question("Enter temperature in Fahrenheit (32°F to 212°F): ", (tempF) => {
                tempF = parseFloat(tempF);
                if (tempF >= 32 && tempF <= 212) {
                    console.log(`Temperature in Celsius: ${fahrenheitToCelsius(tempF).toFixed(2)}°C`);
                } else {
                    console.log("Invalid input! Enter a value between 32°F and 212°F.");
                }
                rl.close();
            });
            break;

        default:
            console.log("Invalid choice! Please enter 1 or 2.");
            rl.close();
    }
});