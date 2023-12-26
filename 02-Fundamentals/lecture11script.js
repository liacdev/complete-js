console.log('**********');
console.log('Lecture 11: Data Types');
// In JavaScript, every value is either an object otr a primitive value
// A value is only a primitive when it's not an object
// The 7 primitive data types are number, string, boolean, undefined, null, 
//      symbol, bigint
// Numbers are always floating point numbers...floats...used for decimals and integers
// Strings are for a sequence of characters.  Always put them in quotes or JS 
//      will confuse them with variable names
// Boolean data types can only be true or false, 1 or 0, used in making decisions
// Undefined: A variable that is not yet defined, or an empty value
// Null is also an empty value...used in different circumstances
// Symbol (ES2015) is a value that is unique and cannot be changed
// Bigint is used for numbers that are larger than the Number type can hold
// Dynamic typing: We do not have to manually define the data type of the value 
//      stored in a variable.Data types are determined automatically.
// In JavaScript, the VALUE has a type, not a variable
// JavaScript programs are executed from top to bottom

console.log(true);

let arbitraryValue;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// Typeof is an operator used to show the types of a value
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Crunchy');
console.log(typeof arbitraryValue);

// Dynamic typing in action
javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

// Declaring an empty variable will automatically hold the value of undefined
let year;
console.log(year);
console.log(typeof year);

// Without let because we are reassigning the value of the variable, 
//      not creating a new variable
year = 1991;
console.log(year);
console.log(typeof year);

// Null is classified as an object type.  It should return 'null'
// This is a bug that has not been corrected for legacy reasons
console.log(typeof null);


/* Practice assignment:
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

// These are in the previous script and do not need to be declared again here
// The results will still log to the console
// Declaring these variables again will throw an exception

/*
let myCountry = "USA";
let myContinent = "North America";
let myCountrysPopulation = 331900000;
*/

const isIsland = false;
let language = "English";

console.log("My country is: " + myCountry);
console.log("It is on the continent of: " + myContinent);
console.log("The population is: " + myCountrysPopulation);

console.log(typeof isIsland);
console.log(typeof myCountry);
console.log(typeof myContinent);
console.log(typeof myCountrysPopulation);
console.log(typeof language);



console.log('   ');
console.log('End of Lecture 11');
console.log('**********');
console.log('   ');