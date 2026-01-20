// ========================
// 1. For Loop
// ========================
console.log("For Loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);  // Outputs: 0, 1, 2, 3, 4
}

// ========================
// 2. While Loop
// ========================
console.log("\nWhile Loop:");
let j = 0;
while (j < 5) {
    console.log(j);  // Outputs: 0, 1, 2, 3, 4
    j++;
}

// ========================
// 3. Do...While Loop
// ========================
console.log("\nDo...While Loop:");
let k = 0;
do {
    console.log(k);  // Outputs: 0, 1, 2, 3, 4
    k++;
} while (k < 5);

// ========================
// 4. For...in Loop (for objects)
// ========================
console.log("\nFor...in Loop:");
const person = {
    name: "Alice",
    age: 25,
    job: "Developer",
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);  // Outputs: name: Alice, age: 25, job: Developer
}

// ========================
// 5. For...of Loop (for arrays and iterable objects)
// ========================
console.log("\nFor...of Loop:");
const colors = ["red", "blue", "green"];
for (let color of colors) {
    console.log(color);  // Outputs: red, blue, green
}

// ========================
// 6. Break and Continue
// ========================
console.log("\nUsing Break and Continue:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Stops the loop when i equals 5
    }
    if (i === 3) {
        continue;  // Skips the current iteration when i equals 3
    }
    console.log(i);  // Outputs: 0, 1, 2, 4
}

// ========================
// 7. Nested Loops
// ========================
console.log("\nNested Loops:");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Outputs:
// i: 0, j: 0
// i: 0, j: 1
// i: 1, j: 0
// i: 1, j: 1
// i: 2, j: 0
// i: 2, j: 1

// ========================
// 8. Iterating Over Arrays (forEach method)
// ========================
console.log("\nforEach Method:");
const numbers = [10, 20, 30, 40];
numbers.forEach((number, index) => {
    console.log(`Index: ${index}, Value: ${number}`);
});
// Outputs:
// Index: 0, Value: 10
// Index: 1, Value: 20
// Index: 2, Value: 30
// Index: 3, Value: 40

// ========================
// 9. Array.map() - for transforming arrays
// ========================
console.log("\nArray.map() Method:");
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);  // Outputs: [100, 400, 900, 1600]
