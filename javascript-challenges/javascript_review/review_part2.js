/// intermediate tools ///
// math methods //
let cartTotal = 16.07;
let roundedUpCart = Math.round(cartTotal);
console.log(roundedUpCart);

console.log(Math.round(cartTotal));
console.log(Math.ceil(cartTotal));//round up
console.log(Math.floor(cartTotal));// round down

// random numbers 0-10
console.log(Math.floor(Math.random()*10));

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
const toThePower = Math.pow(e,d);
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

