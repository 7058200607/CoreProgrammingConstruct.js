const message = ["Vrushali ", "Rajendra ", "Joshi."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);

// Output: Vrushali Rajendra Joshi.
