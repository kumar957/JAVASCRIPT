// A function that accepts another function as an argument
function performOperation(a, b, operation) {
    return operation(a, b);
}

// Defining some operations
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

// Using performOperation with different functions
console.log("Addition:", performOperation(5, 3, add)); // Output: 8
console.log("Multiplication:", performOperation(5, 3, multiply)); // Output: 15
// A function that returns another function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

// Using the returned function
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double of 5:", double(5)); // Output: 10
console.log("Triple of 5:", triple(5)); // Output: 15
