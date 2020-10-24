// alert('hello world');
////////////////////////////////////////////
// Console types for debugging //
////////////////////////////////////////////
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

////////////////////////////////////////////
// Variables in JS //
////////////////////////////////////////////
// Var: globally scoped variable. it could cause a conflict of two var variables had the same name but one is in if statement and another outside it.
// Let and const added with ES6 Ecomp script. have a block level scope
// Let: you can re-assing values
// const: you can't re-assign values
// always use const unless you want to reassign values
let age = 30;
age = 31;
console.log(age);

let score; //initialize a varilable 
score = 10;
// const score = 10;
console.log(score);

////////////////////////////////////////////
// Data Types //
////////////////////////////////////////////
// string, numbers, boolean, null, undefined, symbol
const name = 'Roy';
const age1 = 30;
const rating = 4.5;
const isCool = true;
const x = null; // null means empty
const y = undefined; // so we can define the undefined
let z; // means undefined

console.log(typeof name);
console.log(typeof age1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

////////////////////////////////////////////
// Concatenation
////////////////////////////////////////////
console.log('My name is ' + name + ' and I am ' + age1);

////////////////////////////////////////////
// Template literal
////////////////////////////////////////////
const hello = `My name is ${name} and I am ${age1}`;
console.log(hello);

////////////////////////////////////////////
// String properties and methods
////////////////////////////////////////////
const s = 'hello world';
const string = 'technology, computers, it, code';// blog tags

console.log(s.length); // length is a property
console.log(s.toUpperCase()); // methed is a function associated within an object
console.log(s.toLowerCase());
console.log(s.substring(0, 5)); //substring let you pull a substring out of a string. that takes two indexes where it starts and end
console.log(s.substring(6, 11)); 
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split('')); // to split by letter put empty quotes without space
console.log(string.split(', ')); //take a string and create an array with it

////////////////////////////////////////////
// Arrays and Arrays methods //
////////////////////////////////////////////
// arrays are variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5); //constracting an array
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];

fruits[5] = 'grapes';// add an item to an array
fruits.push('mangos'); // add an item to the end of the array
fruits.unshift('strawberries'); // add to the beginning 
fruits.pop();// removes the last item

console.log(fruits);
console.log(fruits[1]);// access an item in an array
console.log(Array.isArray(fruits)); // true - to check if array
console.log(Array.isArray('hello')); // false - to check if array
console.log(fruits.indexOf('oranges'));// to find the indexOf an item


////////////////////////////////////////////
// Objects and Objects literals //
////////////////////////////////////////////
// Objects literals are key value pairs

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);