// Example of an IIFE
(function () {
    const message = "I am an IIFE!";
    console.log(message);
})(); // Output: I am an IIFE!

// IIFE with parameters
(function (name) {
    console.log(`Hello, ${name}!`);
})("Alice"); // Output: Hello, Alice!
