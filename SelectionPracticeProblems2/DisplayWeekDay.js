// Importing the readline module
const readline = require('readline');

// Creating the readline interface
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// Asking the user to perform some task for input
rl.question("Enter the week day number: ", (weekDay) => {
    if(weekDay == 1) {
        console.log("Monday");
    } else if(weekDay == 2) {
        console.log("Tuesday");
    } else if(weekDay == 3) {
        console.log("Wednesday");
    } else if(weekDay == 4) {
        console.log("Thrusday");
    } else if(weekDay == 5) {
        console.log("Friday");
    } else if(weekDay == 6) {
        console.log("Saturday");
    } else {
        console.log("Sunday");
    }

    rl.close();
})