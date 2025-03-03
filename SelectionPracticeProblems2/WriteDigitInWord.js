const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter single digit: ", (value) => {
    var digit = parseInt(value);

    if(digit == 1) {
        console.log("One");
    } else if(digit == 2) {
        console.log("Two");
    } else if(digit == 3) {
        console.log("Three");
    } else if(digit == 4) {
        console.log("Four");
    } else if(digit == 5) {
        console.log("Five");
    } else if(digit == 6) {
        console.log("Six");
    } else if(digit == 7) {
        console.log("Seven");
    } else if(digit == 8) {
        console.log("Eight");
    } else if(digit == 9) {
        console.log("Nine");
    } else {
        console.log("Zero")
    }

    rl.close();
});