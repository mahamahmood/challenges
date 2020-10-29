// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // const strArr = str.split('');// create an array and split each element with space
    // strArr.reverse();
    // console.log(strArr)
    // return strArr.join('');

    //or
    // return str
    //     .split('')
    //     .reverse()
    //     .join('')
////// solution 2 //////// 
    
////// solution 3 //////// 
////// solution 4 for of loop //////// 
    // let revString = '';
    // for(let char of str) {
    //     revString = char + revString;
    // }
    // return revString;
////// solution 5 for each loop higher order methods es6 //////// 
    
}


  
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');
    return revString === str;
}
console.log(isPalindrome('racecar'));



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString) * Math.sign(int);//parseInt change a string to int
}
console.log(reverseInt(-521));



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    const strArr = str.toLowerCase().split(' ');

}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}



// Call Function
const output = reverseString('hello');

console.log(output);