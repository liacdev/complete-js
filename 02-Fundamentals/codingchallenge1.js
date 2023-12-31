'use strict'

console.log('**********');
console.log('Coding Challenge 1');

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

3. Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

👋 OPTIONAL: You can watch my solution in video format in the next lecture

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = (BMIMark > BMIJohn);

console.log("Mark's mass is: " + massMark + "kg");
console.log("Mark's height is: " + heightMark + "m");
console.log("John's mass is: " + massJohn + "kg");
console.log("John's height is: " + heightJohn + "m");
console.log("Mark's BMI is: " + BMIMark);
console.log("John's BMI is: " + BMIJohn);
console.log("Mark's BMI is higher than John's BMI: " + markHigherBMI);


console.log('   ');
console.log('Coding Challenge 1 complete');
console.log('**********');
console.log('   ');