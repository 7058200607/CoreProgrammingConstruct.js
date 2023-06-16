/*  basics of object
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
*/

// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// creating an object
const person1 = new Person('Vrushali');
const person2 = new Person('Mrunali');

console.log(person1.name); 
// Output: vrushali
console.log(person2.name); 
// Output : Mrunali

// Prototype 
function Person1 () {
  this.name = 'John',
  this.age = 23
}

const person = new Person1();

// checking the prototype value
console.log(Person1.prototype); 
// output: { ... }

// Execption Handling in javascript

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}