// ========================
// Defining an Object
// ========================
const person = {
    firstName: "John",        // String property
    lastName: "Doe",          // String property
    age: 30,                  // Number property
    isMarried: false,         // Boolean property
    greet: function () {      // Method (function property)
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
    "favorite color": "blue", // Property with a space
};

// ========================
// Accessing Properties
// ========================
// Dot notation
console.log("First Name:", person.firstName); // John

// Bracket notation (useful for keys with spaces or special characters)
console.log("Favorite Color:", person["favorite color"]); // blue

// Calling a method
person.greet(); // Hello, my name is John Doe

// ========================
// Adding/Updating Properties
// ========================
person.country = "USA"; // Adding a new property
person.age = 31;        // Updating an existing property

console.log("Updated Person:", person);

// ========================
// Deleting Properties
// ========================
delete person.isMarried;
console.log("After Deletion:", person);

// ========================
// Checking for Properties
// ========================
console.log("Has 'age'? ", "age" in person);            // true
console.log("Has 'isMarried'? ", person.hasOwnProperty("isMarried")); // false

// ========================
// Iterating Over Properties
// ========================
// Using for...in
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Using Object.keys()
Object.keys(person).forEach((key) => {
    console.log(`Key: ${key}, Value: ${person[key]}`);
});

// ========================
// Property Descriptors
// ========================
const descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("Property Descriptor:", descriptor);

// ========================
// Object.freeze() and Object.seal()
// ========================
const frozenObj = Object.freeze({ a: 1 }); // Prevents modifications
const sealedObj = Object.seal({ b: 2 });  // Allows updates but no additions/deletions

console.log("Frozen Object:", frozenObj);
console.log("Sealed Object:", sealedObj);

// ========================
// Property Shortcuts in ES6
// ========================
const x = 10, y = 20;
const coordinates = { x, y }; // Property names are the same as variable names
console.log("Coordinates:", coordinates);
