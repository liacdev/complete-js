'use strict'

console.log('**********');
console.log('Lecture 19: Coding Challenge 2');

/*
Notes:
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

👋 OPTIONAL: You can watch my solution in video format in the next lecture

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/
// Test data 1


console.log("Test data 1");

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
} else {
    console.log(`John's ${BMIJohn} is higher than Mark's BMI ${BMIMark}`);
}
console.log("   ");


// Test data 2
console.log("Test data 2");
console.log("   ");

if (BMIMark2 > BMIJohn2) {
    console.log(`Mark's BMI ${BMIMark2} is higher than John's ${BMIJohn2}`);
} else {
    console.log(`John's ${BMIJohn2} is higher than Mark's BMI ${BMIMark2}`);
}
console.log("   ");


console.log('   ');
console.log('End of Lecture 19');
console.log('**********');
console.log('   ');