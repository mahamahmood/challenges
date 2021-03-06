/// intermediate tools ///
// math methods //
let cartTotal = 16.07;
let roundedUpCart = Math.round(cartTotal);
console.log(roundedUpCart);

console.log(Math.round(cartTotal));
console.log(Math.ceil(cartTotal));//round up
console.log(Math.floor(cartTotal));// round down

// random numbers 0-10
console.log(Math.floor(Math.random() * 10));

// min max
let one = 1;
let two = 2;
let three = 3;

console.log(Math.max(one, two, three));
console.log(Math.min(one, two, three));

let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(Math.max(...myArr));
console.log(Math.min(...myArr));

//// Let's get Mathy
const a = 42.78;
const b = 1.1;
const c = -2;
const d = .5;
const e = 16;

// Round a down
const roundDown = Math.floor(a);
console.log(roundDown);
// Round b up
const roundUp = Math.ceil(b);
console.log(roundUp);
// Find the absolute value of b - a
const absolute = Math.abs(a - b);
console.log(absolute);
// Find the largest number of a, b, c, d, e
const largestNum = Math.max(a, b, c, d, e);
console.log(largestNum);
// Find the smallest number of a, b, c, d, e
const smallestNum = Math.min(a, b, c, d, e);
console.log(smallestNum);
//find the square root of 'e';
const squareRoot = Math.sqrt(e);
console.log(squareRoot);
// Raise 'e' to the power of 'd';
const toThePower = Math.pow(e, d);
console.log(toThePower);
// Generate a random num between 1 - 6;
const random1 = Math.floor(Math.random() * 6 + 1);
console.log(random1);
// or
const random2 = Math.ceil(Math.random() * 6);
console.log(random2);


// Ternary Operator 
//expression ? true : false
// 'dog' ? console.log(true) : console.log(false)

// Do..while
// runs once then it checks if it's true of false
// let x = 100;
// do {
//     console.log(x);
//     x--
// } while (x > 0);

// do {
//     if (x % 2 !== 0) {
//         console.log(x);
//     }
//     x--
// } while (x > 0);

// Split and Join methods
const myString = 'Hello World';
const words = myString.split(' ');// split a string into an array
console.log(words);

const myArray = ['Hello', 'World'];
const arr = myArray.join(' ');// join an array to a string
console.log(arr);

// String Activity
// Switcharoo
let firstVariable = 'Hello World';
firstVariable = 42;
let secondVariable = firstVariable;
secondVariable = 'string';
console.log(firstVariable);
console.log(secondVariable);
// Combine it
const yourName = 'Maha';
console.log('Hello, my name is ' + yourName);
console.log(`Hello, my name is ${yourName}`);


// eval funcation
// takes a string and evaluates it as a javascript exprssion
eval('console.log("hello world")');

const num1 = 5;
const num2 = 7;
const operator = '+';
let result;

eval(`result = ${num1} ${operator} ${num2}`);
console.log(result);

// Sets
// sets are datatype that doesn't allow duplicates. it's a good tool for removing duplicates from an array
const myArr1 = [1, 1, 1, 2, 2, 2];
const mySet = new Set(myArr1);
const newArr = [...mySet];
console.log(mySet);
console.log(newArr);

// MultiDimensional Array
// an array inside of an array
const mArray = [1, 2, 3, 4, 5, [6, 7, [8, 9]], [10, 11]];
console.log(mArray[5][2][1]); // logs 9
console.log(mArray[6][0]);// logs 10
console.log(mArray[5][2][0]); // logs 8

// Getting the last and middle element of an array
const mArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(mArr[mArr.length - 1]);// logs last element
console.log(mArr[Math.floor(myArr.length / 2)]);// middle element;

// Array Methods
const myArray1 = [1, 2, 3, 4, 5, 6, 7, 8];

/// IndexOf method
console.log(myArray1.indexOf(5));

/// Push and Pop
//pop removes the last item and returns it
//push adds an item to the end of an array and returns new lenght of array
console.log(myArray1.pop(), myArray1);
console.log(myArray1.push(9), myArray1);

/// Shift and Unshift
// Shift removes the first item and returns it.
// Unshift adds an item to the front of an array and retrun the new length of the array
console.log(myArray1.shift(), myArray1);
console.log(myArray1.unshift(0), myArray1);

/// Reverse
// reverse an array
console.log(myArray1.reverse(), myArray1);

/// Slice and Splice
// slice doesn't mutate the array; it gives subset of an array
console.log(myArray1.slice(1, 3), myArray1); //prints element 1 and 2 but not 3 the last one
// splice mutates the array
console.log(myArray1.splice(2, 3), myArray1);

/// Sort
const myArray2 = [1, 4, 2, 3, 5, 8, 7, 6];
console.log(myArray2.sort());

/// Refrence vs Value
// Primitives: strings, numbers, booleans are passed by value
let number1 = 5;
let number2 = number1;
number1 = 6;
console.log(number1, number2);

// Collections: objects, arrays, sets are passed by refrence
let arr1 = [1];
let arr2 = [...arr1];
arr1[0] = 5;
console.log(arr1, arr2);

///////////////////////////////////
// Conditionals //
let lightsOn = false;
if (lightsOn) {
    console.log("The lights are on!");
} else {
    console.log('The lights are off. Goodnight');
}
// or
lightsOn ? console.log('The lights are on!') : console.log('The llights are off');

let name = "Ayla";

if (name === "Ayla") {
    console.log("Hello Ayla");
} else if (name === "Arthur") {
    console.log("Arthur");
} else {
    console.log("I don't know you");
}

// Switch
switch (name) {
    case 'Ayla':
        console.log('Hello Ayla');
        break;
    case 'Ira':
        console.log('Hello Ira');
        break;
    default: //same as else
        console.log('I don\'t know you');
}
console.log(`Hello ${name}`);

x = 0;
do {
    console.log('Hello');
} while (x !== 0);
for (let i = 0; i < 10; i++) {
    console.log(`The count is at: ${i}`);
}

///////////////////////////////////////////
// Arrays and conditionals

// create an array that contains three strings
const strings = ['hello', 'hi', 'hey'];
// Random
// access the first element of the array
// reassign the value of 'Hello' to "world"
// check the value of the array to make sure it updated the array
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2] = 'World';
console.log(randomThings);

// Class
const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"];
//access the 3rd element
console.log(ourClass[2]);
// update 3rd to "Octocat"
ourClass[2] = "Octocat";
// add a new element "Cloud City"
ourClass.push("Cloud City");
console.log(ourClass);

// Mix it up
const myArray = [5, 10, 500, 20];
// add "Egon" to the end
myArray.push('Egon');
console.log(myArray);
// remove string from the end
myArray.pop();
console.log(myArray);
// add "Bob Marley" to the beginning
myArray.unshift('Bob Marley');
console.log(myArray);
// remove string from the beginning
myArray.shift();
console.log(myArray);
// reverse the array
myArray.reverse();
console.log(myArray);

// Biggie Smalls
// iterates over myArray and log little number if num is less than 100
for (i in myArray) {
    if(i < 100) {
        console.log(`${i} is a littel number`)
    } else if (i >= 100) {
        console.log(`${i} is a big number`)
    }
}
