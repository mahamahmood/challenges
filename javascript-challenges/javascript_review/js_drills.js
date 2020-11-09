////////////////////////////////
// Fizz Buzz
////////////////////////////////
// write a loop to print 1-100
// write if statment to check if num is divisible by 3 and replace by "Fizz" 
// write if statment to check if num is divisible by 5 and replace by "Buzz"
// write if statment to check if num is divisible by 3 and 5 replace by "FizzBuzz"
// otherwise log num
for(let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FizzBuzz`);
    } else if(i % 3 == 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 == 0) {
        console.log(`${i} Buzz`);
    } else {
        console.log(i);
    }
} 
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// change Plantee's array to reflect her being a year older
plantee[2] += 1;
console.log(plantee);
// change Wolfy's hometown to Gotham City
wolfy[3] = "Gotham City";
console.log(wolfy);
// give D'Art a second hometown by adding 'Hawkins'
dart.push('Hawkins');
console.log(dart);
// Remove "Wolfy" from the wolfy array and replace it with "Gameboy"
wolfy.shift()
wolfy.unshift('Gameboy');
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

////////////////////////////////
// Palindrome
////////////////////////////////

////////////////////////////////
// Sum Array
////////////////////////////////

////////////////////////////////
// Rock Paper Scissors
////////////////////////////////