const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

var month;
var day;

rl.question("Enter the month: ", inputMonth => {
    month = inputMonth;
    rl.question("Enter the day: ", inputDay => {
        day = parseInt(inputDay);

        let months = ["March", "April", "May", "June"];
        var result = false;

        if(months.includes(month)) {
            if(month == months[0] && day < 20) {
                result = false;
            } else if(month == months[3] && day > 20) {
                result = false;
            } else {
                result = true;
            }
        }

        console.log("Lies the given time frame:", result);
        rl.close();
    })
})