const oneFeetInInch = 12;

console.log("48 inch in feet is: ", (48/oneFeetInInch));

const plotLengthInFeet = 60;
const plotWidthInFeet = 40;

var areaOfPlotInFeet = plotLengthInFeet * plotWidthInFeet;
const oneFeetInMeter = 0.3048;
const oneAcresInFeet = 43560;

console.log("Area of plot in meters is: ", (areaOfPlotInFeet*oneFeetInMeter));
console.log("Area of such 25 plots in acres is: ", (areaOfPlotInFeet*25 / oneAcresInFeet));