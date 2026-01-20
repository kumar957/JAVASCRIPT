// 1. Primitive Data Types

// String: Textual data
let name = "John Doe";
console.log("Name:", name); // Output: John Doe
console.log("Type of 'name':", typeof name); // Output: string

// Number: Numeric data
let age = 30;
let pi = 3.14;
console.log("Number (integer):", age); // Output: 30
console.log("Number (float):", pi); // Output: 3.14
console.log("Type of 'age':", typeof age); // Output: number

// BigInt: Large integers beyond the safe limit of Number
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber); // Output: 1234567890123456789012345678901234567890n
console.log("Type of 'bigNumber':", typeof bigNumber); // Output: bigint

// Boolean: Logical true or false
let isLoggedIn = true;
let hasPermission = false;
console.log("Boolean (true):", isLoggedIn); // Output: true
console.log("Boolean (false):", hasPermission); // Output: false
console.log("Type of 'isLoggedIn':", typeof isLoggedIn); // Output: boolean

// Undefined: Variable declared but not assigned a value
let notAssigned;
console.log("Undefined:", notAssigned); // Output: undefined
console.log("Type of 'notAssigned':", typeof notAssigned); // Output: undefined

// Null: Represents an intentional absence of value
let emptyValue = null;
console.log("Null:", emptyValue); // Output: null
console.log("Type of 'emptyValue':", typeof emptyValue); // Output: object (this is a known quirk in JavaScript)

// Symbol: Unique and immutable value
let uniqueID = Symbol("id");
console.log("Symbol:", uniqueID); // Output: Symbol(id)
console.log("Type of 'uniqueID':", typeof uniqueID); // Output: symbol

// 2. Non-Primitive (Reference) Data Types

// Object: Collection of key-value pairs
let person = {
  name: "Alice",
  age: 25,
};
console.log("Object:", person); // Output: { name: 'Alice', age: 25 }
console.log("Type of 'person':", typeof person); // Output: object

// Array: Ordered list of values (technically an object)
let colors = ["Red", "Green", "Blue"];
console.log("Array:", colors); // Output: ['Red', 'Green', 'Blue']
console.log("Type of 'colors':", typeof colors); // Output: object

// Function: Callable block of code
function greet() {
  return "Hello, World!";
}
console.log("Function:", greet); // Output: [Function: greet]
console.log("Type of 'greet':", typeof greet); // Output: function

// 3. Special Cases

// NaN: Not-a-Number (result of invalid numerical operations)
let invalidNumber = "abc" / 2;
console.log("NaN:", invalidNumber); // Output: NaN
console.log("Type of 'invalidNumber':", typeof invalidNumber); // Output: number

// Infinity: Result of division by zero or overflow
let infiniteValue = 1 / 0;
console.log("Infinity:", infiniteValue); // Output: Infinity
console.log("Type of 'infiniteValue':", typeof infiniteValue); // Output: number

// 4. Type Conversion Examples

// Implicit conversion
let implicit = "5" * 2; // String is coerced to a number
console.log("Implicit Conversion:", implicit); // Output: 10
console.log("Type of 'implicit':", typeof implicit); // Output: number

// Explicit conversion
let str = "123";
console.log(str);123 // Output: "123"
console.log(typeof str); // Output: string
let explicit = Number("123"); // Convert string to number
console.log("Explicit Conversion:", explicit); // Output: 123
console.log("Type of 'explicit':", typeof explicit); // Output: number
// 🔹 String Conversion
console.log("=== String Conversion ===");
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

console.log((123).toString()); // "123"
console.log(true.toString()); // "true"
// console.log(null.toString()); // ❌ Error
// console.log(undefined.toString()); // ❌ Error

// 🔹 Number Conversion
console.log("\n=== Number Conversion ===");
console.log(Number("123")); // 123
console.log(Number("12.5")); // 12.5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("abc")); // NaN

console.log(parseInt("123px")); // 123
console.log(parseInt("12.9")); // 12
console.log(parseInt("abc")); // NaN

console.log(parseFloat("12.34")); // 12.34
console.log(parseFloat("12.34px")); // 12.34
console.log(parseFloat("abc")); // NaN

// 🔹 Boolean Conversion
console.log("\n=== Boolean Conversion ===");
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hi")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false

console.log(!!"hello"); // true
console.log(!!0); // false
console.log(!!123); // true
console.log(!!undefined); // false

// 🔹 Other Conversions
console.log("\n=== Other Conversions ===");
console.log(BigInt(123)); // 123n
console.log(BigInt("456")); // 456n
// console.log(BigInt(12.5)); // ❌ Error

console.log(Symbol("id")); // Symbol(id)
console.log(Symbol("id") === Symbol("id")); // false
