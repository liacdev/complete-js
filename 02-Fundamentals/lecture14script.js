console.log('**********');
console.log('Lecture 14: Operator Precedence');


/* Practice assignment:
None for this lesson
*/

const year2037 = 2037;
const ageBill = year2037 - 1991;
const ageMarv = year2037 - 2018;

// How does this order of operations work?
console.log(year2037 - 1991 > year2037 - 2018);

// Google 'MDN Operator Precedence' has a table of precedence from high to low
console.log(25 - 10 - 5); // This demonstrates that subtract is left-to-right

// Assignment is right to left, as when we declare a variable
// We can declare two variables at the same time
// This demonstrates that subtraction is left to right, and assignment is right to left
let x, y;
x = y = 25 - 10 - 5;
console.log("x has the value of " + x + " because x is equal to y and y has the value of " + y);

// Calculate the average age of two people
console.log('Bill is ' + ageBill + ' years old and Marv is ' + ageMarv + ' years old');

// This demonstrates that grouping is higher precedence than division
const averageAge = (ageBill + ageMarv) / 2;
console.log('The average age is: ' + averageAge);

console.log('   ');
console.log('End of Lecture 14');
console.log('**********');
console.log('   ');