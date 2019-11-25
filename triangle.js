const readlineSync = require("readline-sync");

base = Number(readlineSync.question("\nEnter base: "));
height = Number(readlineSync.question("Enter height: "));
hypotenuse = Number(readlineSync.question("Enter hypotenuse: "));

if (base ** 2 + height ** 2 === hypotenuse ** 2){
    console.log("\nYes, that's a right triangle!");
}
else {
    console.log("\nNope...not a right triangle.");
}
