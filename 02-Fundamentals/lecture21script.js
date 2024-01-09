'use strict'

console.log('**********');
console.log('Lecture 21: Truthy and Falsy Values');

/*
Notes:
- There are 5 falsy values: 0, '' (empty string), undefined, null, and NaN
- All of these will be converted to false when we attempt to convert them to a boolean
- False is already false, so it's no on the list of falsy values

- Everything else are truthy values and will be converted to true 
when converted to a boolean
- Any number that is not zero or any string that is not empty will be converted to true when we attempt to convert them to a boolean
*/

// These all resolve to false
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));

// Strings and template literals resolve to true
console.log(Boolean('Midnight poop'));
console.log(Boolean(`Burnin the midnight poop`));

// The empty object resolves to true
console.log(Boolean({}));

// We never really use the Boolean function in practice so
//  in practice the conversion to Boolean is usually implicit and not explicit

// When does JavaScript use type coercion to convert booleans?
// Two scenarios: When using logicl operators, or in a logical context 
//      such as a condition in an if/else statement

//JavaScript coerces the money const into a boolean using truthy and falsy value rules
const money = 0;

if (money) {
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job!");
}

const money2 = 100;

if (money2) {
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job!");
}

// Check if a variable is defined or not
let height;
if (height) {
    console.log(`Yay! Height is defined!`);
} else {
    console.log(`Height is undefined!`);
}

let height2 = 200;
if (height2) {
    console.log(`Yay! Height2 is defined!`);
} else {
    console.log(`Height2 is undefined!`);
}

// If height is defined as zero, it is still undefined
// This triggers the else statement because zero is a falsy value
//      even though the height is defined as zero
// We can fix this bug using logical operators later in this section
let height3 = 0;
if (height3) {
    console.log(`Yay! Height3 is defined!`);
} else {
    console.log(`Height3 is undefined!`);
}

console.log('   ');
console.log('End of Lecture 21');
console.log('**********');
console.log('   ');