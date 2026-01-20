// ========================
// 1. Set in JavaScript
// ========================
console.log("Set Example:");

// A Set is a collection of unique values.
const mySet = new Set();

// Adding values to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate value, won't be added

console.log(mySet);  // Outputs: Set { 1, 2, 3 }

// Checking if a value exists in the set
console.log(mySet.has(2));  // Outputs: true
console.log(mySet.has(4));  // Outputs: false

// Removing a value from the set
mySet.delete(1);
console.log(mySet);  // Outputs: Set { 2, 3 }

// Getting the size of the set
console.log(mySet.size);  // Outputs: 2

// Iterating through a set
mySet.forEach(value => {
    console.log(value);  // Outputs: 2, 3
});

// Clearing all values in the set
mySet.clear();
console.log(mySet);  // Outputs: Set {}

// ========================
// 2. Map in JavaScript
// ========================
console.log("\nMap Example:");

// A Map is a collection of key-value pairs, where keys can be any datatype.
const myMap = new Map();

// Adding key-value pairs to the map
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set('isActive', true);

// Accessing values from the map
console.log(myMap.get('name'));  // Outputs: Alice
console.log(myMap.get('age'));   // Outputs: 25
console.log(myMap.get('isActive')); // Outputs: true

// Checking if a key exists in the map
console.log(myMap.has('age'));  // Outputs: true
console.log(myMap.has('salary'));  // Outputs: false

// Removing a key-value pair from the map
myMap.delete('isActive');
console.log(myMap.get('isActive'));  // Outputs: undefined

// Getting the size of the map
console.log(myMap.size);  // Outputs: 2

// Iterating through a map
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
    // Outputs:
    // name: Alice
    // age: 25
});

// Clearing all key-value pairs in the map
myMap.clear();
console.log(myMap);  // Outputs: Map {}
