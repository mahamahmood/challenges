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
