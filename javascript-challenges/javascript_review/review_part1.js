// Boolean Expressions
console.log(999 > 999);// false
console.log(999 == 999);//true
console.log(999 != 999);// false
console.log(-5 >= -4);// false
console.log(100 <= -100);// false
console.log(20 + 5 < 5);// false
console.log(81 / 9 == 9);//true
console.log(9 != 8 + 1);// false

// While Loops
// write a while loop that logs Ginger chocolate honey patties 1000
let i = 0;
while(i <= 1000) {
    console.log('Ginger chocolate honey patties');
    i++;
}

// wirte while loop counts 0 to 1000
let x = 0;
while(x <= 1000) {
    console.log(x);
    x++;
}

// wirte a while looop counts 0 to 1000 and concatenates current loop number
let y = 0;
while(y <= 1000) {
    console.log(`current loop number is: ${y}`);
    y++;
} 

// For Loops
// wirte a for loop counts 0 to 100
for(let a = 0; a <= 100; a++) {
    console.log(a);
}

// wirte for loop counts 7 to 635
for(let b = 7; b <= 635; b++) {
    console.log(b);
}

// write a for loop using varialbes
let start = 0;
const limit = 100;
for(let k = start; k <= limit; k++) {
    console.log('start and limit' + ' ' + k);
}

// looping through an array 
// for loop
const loopArr = ["Hello", "world", "this", "is", "me", "looping", "through", "an", "array!"]

for(let c = 0; c < loopArr.length; c++) {
    console.log(loopArr[c]);
}
//for in loop
for(j in loopArr) {
    console.log(`for in loop: ${loopArr[j]}`);
    j++;
}
/////////////////////
// Boolean expressions and variable assignment
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
const f = false;
// evaluates all to true
console.log(a < b);
console.log(c > d);
console.log('name' == 'name');
console.log(a != b < c);
console.log(a === a != d);
console.log(e == 'Kevin');
console.log(48 !== '48');
console.log(f != e);
let g = 0;
g = b+ c
console.log(g);

// For Loops
// write for loop count 0 - 999
for(let i = 0; i <= 999; i++) {
    console.log(i)
}

// For loop in reverse
for(let i = 999; i >= 0; i--) {
    console.log(i)
}

// for loop string concatenation or template literals
for(let i = 0; i <= 10; i++) {
    console.log(`The value of i is: ${i} of 10`);
}

// Iteration through an array
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for(let i = 0; i < StarWars.length; i++) {
    console.log(`element of the array: ${StarWars[i]}`)
}
for(element in StarWars) {
    console.log(StarWars[element] + ' has the index of ' + element);
    element++;
}
/////////////////////