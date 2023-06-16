let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers);
// Output: [ 2, 4, 6, 8, 10 ]


// function to check even numbers
function checkOdd(number) {
    if (number % 2 != 0)
      return true;
    else
      return false;
  }
// create a new array by filter even numbers from the numbers array
let OddNumbers = numbers.filter(checkOdd);
console.log(OddNumbers);

// Output :[1,3,5,7,9]