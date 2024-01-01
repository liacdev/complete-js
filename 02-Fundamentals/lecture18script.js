'use strict'

console.log('**********');
console.log('Lecture 18: Taking Decisions: if / else Statements');

/*
Notes:
*/
console.log(`   `);

// Is this person old enough to drive?
const ageSarah = 19;
const ageSteve = 15;
const ageToDrive = 18;

console.log(`Sarah is ${ageSarah} years old.`);
console.log(`The age to drive a car is ${ageToDrive} years old.`);

if (ageSarah >= ageToDrive) {
    console.log(`Sarah is old enough to drive.`)
} else {
    console.log(`Sarah is not old enough to drive.`)
}

console.log(`   `);

console.log(`Steve is ${ageSteve} years old.`);
console.log(`The age to drive a car is ${ageToDrive} years old.`);

if (ageSteve >= ageToDrive) {
    console.log(`Steve is old enough to drive.`)
} else {
    console.log(`Steve is not old enough to drive.`)
}

console.log(`   `);

let century;

const birthYear1 = 1991;
if (birthYear1 <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`The century is ${century}`);



console.log('   ');
console.log('End of Lecture 18');
console.log('**********');
console.log('   ');