// ========================
// 1. Rest Operator (...) 
// ========================

// The rest operator is used to collect multiple values into an array or object.

// Rest in function parameters:
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5)); // Outputs: Sum: 15

// Rest with destructuring (array):
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log("First:", first);      // Outputs: First: 1
console.log("Second:", second);    // Outputs: Second: 2
console.log("Rest:", rest);        // Outputs: Rest: [3, 4, 5]

// Rest with destructuring (object):
const person = { name: "Alice", age: 25, job: "Developer" };
const { name, ...otherDetails } = person;
console.log("Name:", name);                // Outputs: Name: Alice
console.log("Other Details:", otherDetails); // Outputs: Other Details: { age: 25, job: 'Developer' }

// ========================
// 2. Spread Operator (...) 
// ========================

// The spread operator is used to unpack elements from an array or object.

// Spread in arrays:
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5, 6];
console.log("Spread in Arrays:", moreNums); // Outputs: Spread in Arrays: [1, 2, 3, 4, 5, 6]

// Spread in objects:
const personDetails = { name: "Bob", age: 30 };
const updatedPerson = { ...personDetails, job: "Engineer" };
console.log("Spread in Objects:", updatedPerson); // Outputs: Spread in Objects: { name: 'Bob', age: 30, job: 'Engineer' }

// Spread with function arguments:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log("Combined Arrays using Spread:", combinedArr); // Outputs: Combined Arrays using Spread: [1, 2, 3, 4, 5, 6]

// ========================
// Key Differences Between Rest and Spread
// ========================

// Rest collects multiple elements into an array (or object) and is used in function parameters or destructuring.
// Spread expands elements out into individual elements (or properties) and is used to copy or combine arrays and objects.

