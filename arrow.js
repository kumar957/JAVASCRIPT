// ========================
// 1. Basic Arrow Function
// ========================
const add = (a, b) => {
    return a + b;
};
console.log("Add Result:", add(5, 3)); // Outputs: Add Result: 8

// ========================
// 2. Single Expression (Implicit Return)
// ========================
const multiply = (a, b) => a * b;
console.log("Multiply Result:", multiply(4, 2)); // Outputs: Multiply Result: 8

// ========================
// 3. Arrow Function with No Parameters
// ========================
const greet = () => "Hello, World!";
console.log("Greet Message:", greet()); // Outputs: Greet Message: Hello, World!

// ========================
// 4. Arrow Function with Single Parameter
// ========================
const square = num => num * num;
console.log("Square Result:", square(4)); // Outputs: Square Result: 16

// ========================
// 5. Arrow Function with Multiple Parameters
// ========================
const subtract = (a, b) => {
    return a - b;
};
console.log("Subtract Result:", subtract(10, 4)); // Outputs: Subtract Result: 6

// ========================
// 6. Arrow Function Inside Array Method (map)
// ========================
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers); // Outputs: Doubled Numbers: [2, 4, 6, 8]

// ========================
// 7. Arrow Function with Object Return (Implicit Return with Parentheses)
// ========================
const createPerson = (name, age) => ({
    name: name,
    age: age
});
console.log("Person Object:", createPerson("Alice", 30)); 
// Outputs: Person Object: { name: 'Alice', age: 30 }

// ========================
// 8. Arrow Functions vs Regular Functions (this Binding Difference)
// ========================
// Regular function (this refers to the function itself)
function regularFunc() {
    console.log("Regular Function this:", this); // Outputs the global object (window in browser)
}

// Arrow function (this refers to the surrounding lexical context)
const arrowFunc = () => {
    console.log("Arrow Function this:", this); // Outputs the surrounding context (not the function itself)
};

// ========================
// 9. Arrow Function and this Example (using in a method)
// ========================
const person = {
    name: "Bob",
    greetRegular: function() {
        console.log("Regular Function:", this.name);
    },
    greetArrow: () => {
        console.log("Arrow Function:", this.name); // 'this' will be undefined or global context
    }
};

person.greetRegular(); // Outputs: Regular Function: Bob
person.greetArrow();   // Outputs: Arrow Function: undefined

