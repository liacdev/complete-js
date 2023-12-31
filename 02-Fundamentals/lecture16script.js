'use strict'

console.log('**********');
console.log('Lecture 16: Coding Challenge 1');

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

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = (BMIMark > BMIJohn);
console.log("Test data 1");
console.log("Mark's mass is: " + massMark + "kg");
console.log("Mark's height is: " + heightMark + "m");
console.log("John's mass is: " + massJohn + "kg");
console.log("John's height is: " + heightJohn + "m");
console.log("Mark's BMI is: " + BMIMark);
console.log("John's BMI is: " + BMIJohn);
console.log("Mark's BMI is higher than John's BMI: " + markHigherBMI);
console.log("   ");

// Test data 2
console.log("Test data 2");
let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;

const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
const markHigherBMI2 = (BMIMark2 > BMIJohn2);

console.log("Mark's mass is: " + massMark2 + "kg");
console.log("Mark's height is: " + heightMark2 + "m");
console.log("John's mass is: " + massJohn2 + "kg");
console.log("John's height is: " + heightJohn2 + "m");
console.log("Mark's BMI is: " + BMIMark2);
console.log("John's BMI is: " + BMIJohn2);
console.log("Mark's BMI is higher than John's BMI: " + markHigherBMI2);
console.log("   ");


console.log('   ');
console.log('End of Lecture 16');
console.log('**********');
console.log('   ');