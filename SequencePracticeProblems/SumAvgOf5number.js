var counter = 0;
var sum = 0;

while(counter < 5) {
    sum += Math.floor(Math.random()*100);
    counter++;
}

console.log("Sum of the numbers is: " + sum);
console.log("And average is: " + (sum/5));