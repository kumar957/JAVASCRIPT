// ===========================
// 1. VARIABLES
// ===========================

// Declaring variables using var, let, and const
var globalVar = "I'm globally scoped (var)";
let blockScopedLet = "I'm block scoped (let)";
const constantValue = "I cannot be reassigned (const)";

console.log("Variables:");
console.log(globalVar);
console.log(blockScopedLet);
console.log(constantValue);

// Rules:
// 1. `var` is function-scoped or globally scoped and can be redeclared.
// 2. `let` is block-scoped and cannot be redeclared in the same scope.
// 3. `const` is also block-scoped but must be initialized when declared.

// ===========================
// 2. OPERATORS
// ===========================

console.log("\nOperators:");

// Arithmetic Operators
let a = 10, b = 3;
console.log("Addition:", a + b); // 13
console.log("Subtraction:", a - b); // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b); // 3.333...
console.log("Modulo (remainder):", a % b); // 1
console.log("Exponentiation:", a ** b); // 1000

// Comparison Operators
console.log("Equality (==):", 5 == "5"); // true (type conversion)
console.log("Strict Equality (===):", 5 === "5"); // false
console.log("Greater than:", a > b); // true
console.log("Less than:", a < b); // false

// Logical Operators
console.log("AND (&&):", true && false); // false
console.log("OR (||):", true || false); // true
console.log("NOT (!):", !true); // false

// Assignment Operators
let c = 10;
c += 5; // Equivalent to c = c + 5
console.log("Updated value of c (+=):", c); // 15

// ===========================
// 3. IMPLICIT COERCION
// ===========================

console.log("\nImplicit Coercion:");

// Type conversion during operations
console.log("String + Number:", "5" + 5); // "55" (string concatenation)
console.log("String - Number:", "5" - 2); // 3 (string converted to number)
console.log("String * Number:", "5" * 2); // 10
console.log("String / Number:", "10" / 2); // 5
console.log("Non-numeric string / Number:", "abc" / 2); // NaN

// Truthy and Falsy values
console.log("Falsy values:", Boolean(0), Boolean(""), Boolean(null), Boolean(undefined), Boolean(NaN)); // false false false false false
console.log("Truthy values:", Boolean(1), Boolean("Hello"), Boolean({})); // true true true

// ===========================
// 4. HOISTING
// ===========================

console.log("\nHoisting:");

// Variables and functions are hoisted to the top of their scope
// Variable declarations are hoisted, but not initializations
console.log("Hoisted var:", hoistedVar); // undefined
var hoistedVar = "I'm hoisted!";

// Let and const are not accessible before declaration...
// console.log("Hoisted let:", hoistedLet); // ReferenceError

let hoistedLet = "I won't be hoisted!";

// Function declarations are hoisted...
hoistedFunction();
function hoistedFunction() {
    console.log("Function hoisting works!");
}

// Function expressions are not hoisted...
// hoistedExpression(); // TypeError...
var hoistedExpression = function () {
    console.log("I won't be hoisted!");
};

// ===========================
// 5. SCOPING
// ===========================

console.log("\nScoping:");

// Global Scope
var globalScope = "I'm in the global scope";

function testScope() {
    // Function Scope
    var functionScope = "I'm in a function scope";
    console.log(globalScope); // Accessible
    console.log(functionScope); // Accessible
    //console.log(blockScope); // Error: blockScope is not accessible here.

    if (true) {
        // Block Scope
        let blockScope = "I'm in a block scope (let)";
        const blockConst = "I'm also in a block scope (const)";
        console.log(blockScope); // Accessible
        console.log(blockConst); // Accessible
    }
}

testScope();
// console.log(functionScope); // Error: functionScope is not accessible outside the function

// Closure Example
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer Variable: ${outerVar}`);
        console.log(`Inner Variable: ${innerVar}`);
    };
}

const closureExample = outerFunction("Outer");
closureExample("Inner");

// ===========================
// Summary:
// - Variables: var (function/global scope), let (block scope), const (block scope, immutable).
// - Operators: Arithmetic, comparison, logical, assignment, etc.
// - Implicit Coercion: Automatic type conversion during operations.
// - Hoisting: Moves declarations to the top of the scope (not initialization).
// - Scoping: Global, function, and block-level scopes.
// ===========================
