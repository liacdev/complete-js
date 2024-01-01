'use strict'

console.log('**********');
console.log('Lecture 17: Strings and Template Literals');

/*
Notes:
*/

const firstNameJan0124 = 'Crunchy';
const jobJan0124 = 'Maine Coon';
const birthYearJan0124 = 2019;
const currentYearJan0124 = 2024;

// Type coercion happens here so the number can be converted to 
//      a string and then concatenated
// This is kind of a pain in the ass
const crunchy = ("My cat's name is " + firstNameJan0124 + " and he is a " + (currentYearJan0124 - birthYearJan0124) + " year old " + jobJan0124);
console.log(crunchy);

// Now let's learn about template literals to make things easier
// We can write a string in a more normal way and then 
//      insert the variables directly into the string
// Use backticks for a template literal.
const crunchy010124 = `My cat's name is ${firstNameJan0124} and he is a ${currentYearJan0124 - birthYearJan0124} year old ${jobJan0124}`;

console.log(crunchy010124);

// Backticks can be used to make regular strings also
// Some developers use backticks for all strings
console.log(`Just a regular string.`);

// Regular multi-line string is done like this:
const multiLine1 = "This is a \n\
string with \n\
multiple lines";

console.log(multiLine1);

// Template literals can also be used to create multi-line strings
const multiLine2 = `This is another
string with
multiple lines
`;

console.log(multiLine2);

// This is very useful when we start building HTML form JavaScript


console.log('   ');
console.log('End of Lecture 17');
console.log('**********');
console.log('   ');