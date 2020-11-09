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
// create an array with the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// use for of loop to call toUpperCase() on each of them and print out the results
const ningaTurtlesArr = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (let i of ningaTurtlesArr) {
    console.log(i);
}

////////////////////////////////
// Palindrome
////////////////////////////////
// wirte a function checkPalindrome that accepts a single argument a string
// if palindrom return true otherwise flase
const checkPalindrome = (string) => {
    // reverse a string by:
    // lowercase the string
    // split the string into an array of letters
    // reverse the array
    // join the array
    const reversedString = string.toLowerCase().split('').reverse().join('');
    console.log(reversedString);
    /////
    // compare the new reversed string to the string
    // make sure to lowercase the string when comparing
    if (reversedString === string.toLowerCase()) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}
checkPalindrome('hello World');
checkPalindrome('Racecar');

////////////////////////////////
// Sum Array
////////////////////////////////
// write a function that takes an argument array
// loop through the array
// create a variable sum 
// return the sum of all the nums

let sum = 0;
const sumArray = (array) => {
    for(let i = 0; i <= array.length; i++){
        sum += i
    }
    // console.log(sum);
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))

////////////////////////////////
// Rock Paper Scissors
////////////////////////////////



////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert
whereIsWaldo.splice(1,1)
console.log(whereIsWaldo);
// change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
// access "Waldo"
console.log(whereIsWaldo[2][1][1]);
