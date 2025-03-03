const firstRandomNumber = Math.floor(Math.random()*1000);
const secondRandomNumber = Math.floor(Math.random()*1000);
const thirdRandomNumber = Math.floor(Math.random()*1000);

var minimum = 0;
var maximum = 0;

if(firstRandomNumber < secondRandomNumber && firstRandomNumber < thirdRandomNumber) {
    minimum = firstRandomNumber;
} else if(secondRandomNumber < firstRandomNumber && secondRandomNumber < thirdRandomNumber) {
    minimum = secondRandomNumber;
} else {
    minimum = thirdRandomNumber;
}

console.log("Minimum of the three number", firstRandomNumber, ",", secondRandomNumber, ",", thirdRandomNumber, "is:", minimum);

if(firstRandomNumber > secondRandomNumber && firstRandomNumber > thirdRandomNumber) {
    maximum = firstRandomNumber;
} else if(secondRandomNumber > firstRandomNumber && secondRandomNumber > thirdRandomNumber) {
    maximum = secondRandomNumber;
} else {
    maximum = thirdRandomNumber;
}

console.log("Maximum of the three number", firstRandomNumber, ",", secondRandomNumber, ",", thirdRandomNumber, "is:", maximum);