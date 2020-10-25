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
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//////////////////////////
// Object Destructuring // 
/////////////////////////
// taking a key value pair and trun it to a variable
const { firstName, lastName, address: { city } } = person; //pulling keys out of the object
console.log(firstName);
console.log(city);
// adding properties
person.email = 'john@gmail.com';
console.log(person);

// Arrays of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]

console.log(todos);
console.log(todos[1].text);

// JSON Format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


////////////////////////////////////////////
// Loops //
////////////////////////////////////////////

// For (pass three parameters ---> itrater, condition needs to be met, increment)
for(let i = 0; i <= 10; i++ ) {// will run until i <= 10 is true
  console.log(`For Loop Number: ${i}`);  
}

// While loop (set the variable outside of the loop. take a condition and increment inside the {})
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}
//////////////////////////
// Looping through arrays
//////////////////////////
for (let i = 0; i < todos.length; i++) {
     console.log(todos[i].text);
}
// or
// For of loop (to loop through an array)
for (let todo of todos) {
    console.log(todo);
    console.log(todo.text);
}

// or
// Higher array methods
// forEach(loops through an array) 
// map (creates a new array from the array)
// filter (creates an array from the array based on a condition)

// forEach it takes a prameter
todos.forEach(function(todo) {
    console.log(todo.text);
});

// map because it return a new array, we need to assign it to a variable
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

// filter and map togther
const todoIsCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoIsCompleted);// returns an array with text of only completed text.

////////////////////////////////////////////
// Conditionals //
////////////////////////////////////////////

// if statement
const a = 10;

if(a == '10') {// it doesn't check for data type
    console.log('a is 10');
}
if(a === 10){// check data type. match the type
    console.log('a is === 10')
}

// if else
const b = 20

if(b === '10') {// it doesn't check for data type
    console.log('b is 10');
}else {
    console.log('b is NOT 10')
}

// if else if else
const c = 4;

if(c === 10){
    console.log('c is 10');
}else if (c > 10){
    console.log('c is greater than 10');
}else{
    console.log('c is less than 10');
}

// mulitple conditions
const d = 6;
const w = 11;

if(d > 5 || w > 10){
    console.log('d is more than 5 or w is more than 10');
}
if(d > 5 && w > 10){
    console.log('d is more than 5 and w is more than 10');
}

//ternary operator
// short hand if statments. used to assign varabile value based on conditions
const g = 9;

const color = g > 10 ? 'red' : 'blue'

console.log(color);

// switches. another way to evaluate a condition
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue': 
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue')
        break;
}

////////////////////////////////////////////
// Functions //
////////////////////////////////////////////

function addNums(num1, num2){// takes paramaters and accept arrguments
    console.log(num1 + num2);
}
addNums(5,4);

function addNums(num1 = 1, num2 = 1){
    console.log(num1 + num2);
}
addNums(); // it gives back NaN which is not a number. it uses default values like the above parameters

function addNums(num1 = 1, num2 = 1){
    console.log(num1 + num2);
}
addNums(5, 5);// it would override the default values

function addNums(num1 = 1, num2 = 1){
    return (num1 + num2);
}
console.log(addNums(5, 5));

//// arrow function ES6 ////
const addNumss = (num1 = 1, num2 = 1) => {
    console.log(num1 + num2);
}
addNumss(5, 5);
// or
const addNumsss = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}
console.log(addNumsss(5, 5));
// or 
const addNumssss = (num1 = 1, num2 = 1) =>  num1 + num2;
console.log(addNumssss(5, 5));
// or 
const addNumsssss = num1 =>  num1 + 5;
console.log(addNumsssss(5));

/// arrow function with forEach
todos.forEach((todo) => console.log(todo));

////////////////////////////////////////////
// Object Oriented Programming //
////////////////////////////////////////////
// we can constract objects using constractor functions

// constructor function (Person is custom constructor)
function Person(firstName, lastName, dob) {
    this.firstName = firstName;//setting them with the property of the object
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function() {// method will show in the object
    //     return this.dob.getFullYear();
    // }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
}
// methods added to prototype (see the chrome console)
Person.prototype.getBirthYear = function() {// method will staty in prototype
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1, person1.firstName);
console.log(person1.dob);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

///////////////////
// ES6 classes 
//////////////////
// it's a syntactic sugar. a pretty way to write the above

// Class
class Personn {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;//setting them with the property of the object
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {// method
        return this.dob.getFullName();
    }
    getFullName() {// method
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person2);


////////////////////////////////////////////
// DOM // document object model - tree structor of the html file
////////////////////////////////////////////

// mostly used are getElementById(''), querySelector('), querySelectorAll('');
// window object
console.log(window)//is the parent element of the borwser
//window.alert(1);
//since it's a top level we don't need to write it we can just do
//alert(1);

//////////////////////////
// Single element selector
console.log(document.getElementById('my-form'));
const form = document.getElementById('my-form');//assign it
console.log(form);
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));// it'll select the first one
/////////////////////////////
// Multiple elements selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('.item'));
console.log(document.getElementsByTagName('li'));


// loop through
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

//////////////////////////
// Manipulating the DOM (user interface)
//////////////////////////
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';

// Event Listener
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target)//giving us the element where the evnet is on
//     console.log(e.target.className)
//     console.log(e.target.id)
// });
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//    document.querySelector('#my-form').style.background = '#ccc';
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hellooo</h1>'
// });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//    document.querySelector('#my-form').style.background = '#ccc';
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hellooo</h1>'
// });

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//    document.querySelector('#my-form').style.background = '#ccc';
//    document.querySelector('body').classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hellooo</h1>'
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter fields');
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000); //3 seconds
    } else {
        console.log('success');
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

       userList.appendChild(li);

       // clear the fields
       nameInput.value = '';
       emailInput.value = '';
    }
    // console.log(nameInput.value);
}