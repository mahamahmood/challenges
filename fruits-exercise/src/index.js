import foods from './foods';
import {choice, remove} from './helpers';

// randomly draw a fruit from the array
let fruit = choice(foods);
// log the message "I'd like on RandomFruit, please"
console.log(`I'd like one ${fruit}, please.`);
// log the message 'here you go: random fruit"
console.log(`Here you go: ${fruit}`);
// log the message 'delicious! may i have another?'
console.log(`Delicious! May I have another?`);
// remove the fruit from the array of fruits
let remaining = remove(foods, fruit);
// log the message 'i'm sorry, we're all out. we have fruitsleft left'
console.log(`I'm sorry, we're all out. We have ${remaining.length} other foods left.`);

