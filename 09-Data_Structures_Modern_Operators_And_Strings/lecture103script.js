'use strict'

console.log('**********');
console.log('Lecture 103: Destructuring Arrays');

// Starter code
const restaurant = {
    name: 'Classico Italiano',
    location: ' Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // Add an order function/method
    // Order from the starter menu and the main menu
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex],
        this.mainMenu[mainIndex]];
    },
};

// Destructuring is an ES6 feature
// A way of unpacking values from an array or an object into separate variables
// Breaking complex data structures down into a smaller data structure like a variable
// Retrieve elements form an array or object and store them into variables

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// This will log the contents of the array
console.log(arr);
console.log(a);
console.log(b);
console.log(c);

// This will destructure the array and place each element into a new variable
// It's not an array, but it looks like one
// It's just a destructuring assignment (on the left side of the = sign)
const [x, y, z] = arr;

// This will log the contents of the new variables as an array
console.log([x, y, z]);
console.log(x);
console.log(y);
console.log(z);

// The original array is still in tact and not affected
console.log(arr);
console.log('   ');

// We do not have to take all of the elements out of the array
const [first, second] = restaurant.categories;
console.log(`First element is ` + first);
console.log(`Second element is ${second}`);
console.log('   ');

// What if we want to skip something and take the first and third element?
// We leave a hole in the destructuring operator
const [first1, , third3] = restaurant.categories;
console.log(`First element is ${first1}`);
console.log(`Third element is ${third3}`);
console.log('   ');


// The restaurant wants to switch their main and secondary categories
let [main, , secondary] = restaurant.categories;
console.log(`The main category is ${main}`);
console.log(`The secondary category is ${secondary}`);
console.log('   ');

// Without destructuring we would have to do it like this:
const temp = main;
main = secondary;
secondary = temp;
console.log(`The main category is now ${main}`);
console.log(`The secondary category is now ${secondary}`);
console.log('   ');

// To do this with destructuring it is easier
// Does not require a tempoirary variable
[main, secondary] = [secondary, main];
console.log(`The main category is ${main} again`);
console.log(`The secondary category is ${secondary}again`);
console.log('   ');

// Write a function to order food 
// Returns many elements from the array
// We added a method to the object, we'll call that method now
console.log(`We ordered ${restaurant.order(2, 0)}`);

// Receive two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`We ordered ${starter} and ${mainCourse}`);
console.log('   ');

// What happens if we have a nested array?
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
console.log('   ');

// What if we wanted all the individual values?
// We have to do destructuring inside of destructuring
const [k, , [l, m]] = nested;
console.log(k, l, m);
console.log('   ');

// We can also set default value for the variables when we are extracting them
// This is useful when we don't know the length of the array
// If the array is shorter than we think, we might try to unpack
//      the array in positions that don't exist
// The variable r is undefined because there is no third element in the array
const [p, q, r] = [8, 9];
console.log(p, q, r);
console.log('   ');

// Default values, u takes the value of 1
// This can be useful when we get data from an API
const [s = 1, t = 1, u = 1] = [8, 9];
console.log(s, t, u);


console.log('   ');
console.log('End of Lecture 103');
console.log('**********');
console.log('   ');