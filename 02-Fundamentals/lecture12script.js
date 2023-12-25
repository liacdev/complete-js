console.log('**********');
console.log('Lecture 12: let, const, and var');

// Declare a variable with let
// let is block scoped
let age = 30;
console.log("The variable 'age' is equal to " + age);

// Reassign or mutate the variable
age = 31;
console.log("Now the variable 'age' is equal to " + age);

// Const is used to declare things that do not change
// Constants cannot be reassigned...immutable
// We cannot declare an empty const
const birthYear = 1991;
console.log("Year of birth is " + birthYear);

// Recommended to use const by default, and then change it to let if 
//      there is a need to change it later

// var is older JavaScript.  It has a specific use case relating to scope
// var is function scoped
var job = 'Programmer';
console.log('My old job is a: ' + job);
job = 'Teacher';
console.log('My new job is a: ' + job);

// If not using strict mode, variable declarations can be inferred 
//      without using var, let, or const

// This doesn't create the variable in the current scope
// JavaScript will create a property on the global object
// Always remember to properly declare your variable
undeclaredFirstName = "b4t";
undeclaredLastName = "54ndw1ch";
console.log('Full name is: ' + undeclaredFirstName + undeclaredLastName);


/* Practice assignment:
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

const officialUsaLanguage = 'English';
console.log('The official language of the USA is: ' + officialUsaLanguage);

console.log('   ');
console.log('End of Lecture 12');
console.log('**********');
console.log('   ');