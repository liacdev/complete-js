console.log('**********');
console.log('Lecture 13: Basic Operators');

// There are many kinds of operators to include (but not limited to) mathematic, 
//      comparison, logical, typeof, and assignment operators

// Arithmetic operators
const currentYear = 2023;
const ageb4t54ndw1ch = currentYear - 1975;
const ageCrunchy = currentYear - 2019;
console.log("The age of b4t54ndw1ch is: " + ageb4t54ndw1ch);
console.log("Crunchy's age is: " + ageCrunchy);
console.log(ageb4t54ndw1ch * 2, ageb4t54ndw1ch / 2);

// Exponents are written like this:
console.log(2 ** 3);

const myFirstName = 'b4t';
const myLastName = '54ndw1ch';
const justASpace = ' '
console.log("Full name is: " + myFirstName + justASpace + myLastName);

// Assignment operators: equals sign is one
// The + operator is executed before the = operator
let xValue = 10 + 5;
console.log("The value of xValue is: " + xValue);

// Another assignment operator is +=
xValue += 10;
console.log("The new value of xValue is: " + xValue);

// Another is *=
xValue *= 4;
console.log("The new value of xValue is: " + xValue);

// Another is /=
xValue /= 2;
console.log("The new value of xValue is: " + xValue);

// Another is ++
xValue++;
console.log("The new value of xValue is: " + xValue);

// Another is --
xValue--;
console.log("The new value of xValue is: " + xValue);

// Comparison operators are used to produce Boolean values
const drinkingAge = 21;
console.log(ageb4t54ndw1ch > ageCrunchy); // Greated than
console.log(ageb4t54ndw1ch < ageCrunchy); // Less than
console.log(ageb4t54ndw1ch >= drinkingAge); // Greater than or equal to
console.log(ageCrunchy >= drinkingAge); // Greater than or equal to
console.log(ageb4t54ndw1ch <= drinkingAge); // Less than or equal to
console.log(ageCrunchy <= drinkingAge); // Less than or equal to
console.log(ageb4t54ndw1ch == ageCrunchy); // Comparison
console.log(drinkingAge == 21); // Comparison
console.log('21' == 21); // Comparison
console.log(drinkingAge === 21); // Strict comparison
console.log('21' === 21); // Strict comparison
console.log(typeof drinkingAge);
console.log(typeof ageb4t54ndw1ch);
console.log(typeof ageCrunchy);


/* Practice assignment:
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/
console.log("If my country were divided in hald, the population of each half would be: " + myCountrysPopulation / 2);
console.log("If my country's population were increased by 1, the result would be: " + myCountrysPopulation + 1);

let populationFinland = 6000000;
console.log("My country has a higher population than Finland: " + (myCountrysPopulation > populationFinland));

const averagePopulation = 33000000;
console.log("My country has a lower population than the average country: " + (myCountrysPopulation < averagePopulation));

const descriptionUsa = myCountry + ' is in ' + myContinent + ', and its ' + myCountrysPopulation + ' people speak ' + officialUsaLanguage;
console.log(descriptionUsa);


console.log('   ');
console.log('End of Lecture 13');
console.log('**********');
console.log('   ');