// 'use strict';
// This will activate strict mode for the entire script
// THis must be first in the script
// If anything besides a comment is before 'use strict' then it will not be activated

// Strict mode can also be activated in a specific function or block
// It's usually best to use strict mode at the beginning of each script

// Strict mode forbids us from doing certain things

// Strict more makes it easier for developers to avoid accidental errors and bugs
// It will create visible errors in certain situations where
//      without strict mode, JavaScript will fail silently without
//      letting us know we made a mistake


console.log('**********');
console.log('Lecture 32: Activating Strict Mode');

let hasDriversLicense = false;
const passTest = true;

// Strict mode prevents this from declaring a variable and throws an error
// If strict mode was off, a new variable would be created on the global object
//      in the wrong scope and we would be unaware of the mistake
if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLicense = true;

if (hasDriverLicense) console.log('I can has driver license! Wrong variable. Strict mode is off.');
if (hasDriversLicense) console.log('I can drive! Correct variable.');

// Strict mode also uses 'future proofing' to prevent us from using 
//      certain keywords that might be introduced into the language later
// Unexpected strict mode reserved word error
// interface, private...there is a list at w3schools

// We will use strict mode in all future scripts in this course

console.log('   ');
console.log('End of Lecture 32');
console.log('**********');
console.log('   ');