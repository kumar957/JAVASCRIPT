// ========================
// 1. Syntax Error
// ========================
// Syntax errors occur when the code is written incorrectly.
// Example: Missing a closing parenthesis or brace.
// Uncomment the line below to see the error.
// console.log("This will cause a syntax error";

// ========================
// 2. Reference Error
// ========================
// Reference errors occur when trying to access a variable that hasn't been declared.
try {
    console.log(undeclaredVariable); // This will throw a ReferenceError
} catch (error) {
    console.error("ReferenceError:", error.message);
}

// ========================
// 3. Type Error
// ========================
// Type errors occur when performing operations on incompatible types.
try {
    const num = 5;
    num.toUpperCase(); // Attempting to call a string method on a number
} catch (error) {
    console.error("TypeError:", error.message);
}

// ========================
// 4. Range Error
// ========================
// Range errors occur when a value is out of an allowable range.
try {
    const largeArray = Array(-1); // Cannot create an array with a negative length
} catch (error) {
    console.error("RangeError:", error.message);
}

// ========================
// 5. Eval Error
// ========================
// Eval errors are related to the `eval()` function (rare in modern JavaScript).
// Modern JavaScript engines rarely throw EvalError, but it's kept for compatibility.
try {
    throw new EvalError("This is an EvalError example");
} catch (error) {
    console.error("EvalError:", error.message);
}

// ========================
// 6. URI Error
// ========================
// URI errors occur when using `decodeURI` or `encodeURI` incorrectly.
try {
    decodeURI("%"); // Invalid URI character
} catch (error) {
    console.error("URIError:", error.message);
}

// ========================
// Additional Error Handling
// ========================
// Use try-catch to handle and log errors gracefully.
try {
    // Simulating a custom error
    throw new Error("Custom error example");
} catch (error) {
    console.error("Custom Error:", error.message);
}
