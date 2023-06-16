// create a set
let map1 = new Map();

// insert key-value pair
map1.set('info', {name: 'vrushali', age: 25});

console.log(map1); 


// access the elements of a Map
console.log(map1.get('info')); 

/* removing all element
map1.clear();
console.log(map1);
*/
// To check the Size of map 
console.log(map1.size);


// we can create a map by using loop method.
let map2 = new Map();
map2.set('name', 'Mrunali');
map2.set('age', '21');
console.log(map2);

// looping through Map
for (let [key, value] of map2) {
    console.log(key + '- ' + value);
}

// we can iterate over the Map and get the key using the keys() method.

// looping through the Map
for (let key of map2.keys()) {
    console.log(key)
  }


  let map3 = new Map();

map3.set('name', 'punam');
map3.set('age', '27');

// looping through the Map
for (let elem of map3.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}