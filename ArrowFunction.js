//Arrow Function with No Argument
let greet = () => console.log('Mrunali');
greet(); // Hello

//Arrow Function with One Argument
let element = x => console.log(x);
element('Vrushali'); // Hello 

//Arrow Function as an Expression
let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby

// Multiline Arrow Functions

let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); 
// output: 12

//
