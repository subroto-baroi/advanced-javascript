// find out number square - general rules


const numbers = [2, 3, 5, 6, 9];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

// find out number square - use map

const numbers = [2, 3, 5, 6, 9];

const result = numbers.map(x => x * x);
console.log(result);

// description this shortcut map system

const numbers = [2, 3, 5, 6, 9];

function square(element) {
    return element * element;
}
// Or
const square = element => element * element;
// or 
const square = x => x * x;



const result = numbers.map(x => x * x);
// or
const result = numbers.map(element => element * element);
or
const result = numbers.map(square);
console.log(result);

// use filter 

const numbers = [2, 3, 5, 6, 9];

const result = numbers.filter(x => x > 5);
console.log(result);


// use find

const numbers = [2, 3, 5, 6, 9];

const result = numbers.find(x => x > 5);
console.log(result);

