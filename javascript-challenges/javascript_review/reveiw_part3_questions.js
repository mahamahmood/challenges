////// The Farm //////
// Write code that will print out 'mooo' if the variable animal is equal to cow
// change your code so that if the variable animal is anything other than a cow, your code should print out 'hey! you're not a cow'

let animal = 'cow';
if (animal == 'cow') {
    console.log('mooooo');
} else {
    console.log('Hey! You\'re not a cow');
}

////// Driver's Ed //////
// write a variable that will hold a person's age
// write code that will print out 'Here are the keys' if the age is 16 years or older
// change your code so that if the age is younger than 16 a message will print 'Sorry, you're too young'

let age = 16;
if (age >= 16) {
    console.log('Here are the keys!');
} else {
    console.log('Sorry, you\'re too young');
}

////// Just Loop It //////
// write code that will print out all the numbers in the range 0-10
for(let i = 0; i <= 10; i++) {
    console.log(i);
}
// write code that will print out all nums in the range 500-50.
for(let i = 500; i >= 50; i--) {
    console.log(i);
}
// or
let i = 500;
while(i >= 50) {
    console.log(i);
    i--;
}

////// Let's get odd //////
// print out the odd nums that are within the range of 1-100
for (let i = 1; i <= 100; i+=2) {
    console.log(i);
}
// adjust your code to add a message next to the odd num that says: 'is an odd num"
let p = 1;
while (p <= 100) {
    console.log(`${p} is an odd number`);
    p+=2;
}

////// Give me Five //////
// for the nums 0-100, print out 'i found a num. High five!' if the num is a multiple of five.
// for(let i = 0; i <= 100; i+=5) {
//     console.log(`I found a ${i}. High five!`);
// }
for(let i = 0; i <= 100; i++) {
    if(i % 5 == 0) {
        console.log(`I found a ${i}. High five!`);
    }
}
// add to the code form above to print out 'i found a num. three is a crowd'if the num is a multiple of three.
for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0 ) {
        console.log(`I found a ${i}. High five!`);
    } else if (i % 3 == 0) {
        console.log(`I found a ${i}. Three is a crowd`)
    }
}

////// Savings account //////
// wirte code that will save the sum of all the nums between 1-10 to a variable called bank_account
let bank_account = 0;
for(let i = 1; i <= 10; i++) {
    bank_account += i;
}
console.log(bank_account);// prints 55

// your pay is now doubled each week. wirte code that will save the sum of all the nums between 1-100 multiplied by 2.
let bank_account2 = 0;
for(let i = 1; i <= 100; i++) {
    bank_account2 += i * 2;
}
console.log(bank_account2);
