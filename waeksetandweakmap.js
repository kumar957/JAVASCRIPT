// ========================
// 1. WeakSet in JavaScript
// ========================
console.log("WeakSet Example:");

// A WeakSet is similar to a Set but only allows objects as its members and holds them weakly (does not prevent garbage collection).
const obj1 = { name: "Alice" };
const obj2 = { name: "Bob" };

const weakSet = new WeakSet();

// Adding objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Checking if an object exists in the WeakSet
console.log(weakSet.has(obj1));  // Outputs: true
console.log(weakSet.has(obj2));  // Outputs: true

// Removing an object from the WeakSet
weakSet.delete(obj1);
console.log(weakSet.has(obj1));  // Outputs: false

// WeakSet does not have size, clear, or iteration methods
// because of its garbage collection nature.

// ========================
// 2. WeakMap in JavaScript
// ========================
console.log("\nWeakMap Example:");

// A WeakMap is similar to a Map but only allows objects as keys and holds them weakly (does not prevent garbage collection).
const key1 = { id: 1 };
const key2 = { id: 2 };

const weakMap = new WeakMap();

// Setting key-value pairs where the keys are objects
weakMap.set(key1, "Alice");
weakMap.set(key2, "Bob");

// Accessing values from the WeakMap
console.log(weakMap.get(key1));  // Outputs: Alice
console.log(weakMap.get(key2));  // Outputs: Bob

// Checking if a key exists in the WeakMap
console.log(weakMap.has(key1));  // Outputs: true
console.log(weakMap.has(key2));  // Outputs: true

// Removing a key-value pair from the WeakMap
weakMap.delete(key1);
console.log(weakMap.has(key1));  // Outputs: false

// WeakMap does not have methods like size or clear because it allows automatic garbage collection of its keys.

