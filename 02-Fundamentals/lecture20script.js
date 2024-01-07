'use strict'

console.log('**********');
console.log('Lecture 20: Type Conversion and Coercion');

/*
Notes:

- Type conversion is when we manually convert from one type to another - explicit
- Type coercion is when JavaScript automatically converts a type for us - implicit



*/

// Below 1991 is a string and 18 is a number so they are concatenated
const inputYear = '1991';
console.log(inputYear + 18);

// Use the number function to convert the value
console.log(Number(inputYear) + 18);

// The variable inputYear is still a string.  It has not changed
// The Number function simply returns a converted value
console.log(Number(inputYear), inputYear);

// Converting 18 to a string still concatenates the values
console.log(inputYear + String(18));

// What if we try to convert something to a number that isn't a number?
// It returns NaN when an operation that involves numbers fails to 
//      produce a valid (new) number
console.log(Number('Crunchy'));

// The typeof NaN is actually number, but not a valid number
console.log(typeof NaN);

console.log(typeof String(23), String(23), 23);

// JavaScript can only convert to a number, a string, or a boolean
// We cannot convert something to undefined or null

// JavaScript does type coercion for us in many situations
// Type coercion happens whenever an operator is dealing with two vaules 
//      of different types
// JavaScript will convert one value to match the other value
// When there is an operation between a string and a number, 
//      the number will be converted to a string
console.log("I am " + 23 + " years old.");

// The same thing happens in template literals
// Without type coercion, it would have to be written as this
console.log("I am " + String(23) + " years old.");

// What happens when we do this?
// JavaScript converted the strings to numbers using the - operator
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);

// Multiplication converts to numbers
console.log('23' * '2');

// Division converts strings to numbers
console.log('24' / '2');

// What will happen?
let n = '1' + 1;
console.log(typeof n);

n = n - 1;
console.log(typeof n);
console.log(n);

console.log(2 + 3 + 4 + '5');

console.log('10' - '4' - '3' - 2 + '5');






console.log('   ');
console.log('End of Lecture 20');
console.log('**********');
console.log('   ');