// Global context
console.log("Global context:", this); // In browsers, outputs the `window` object

// Inside an object
const obj = {
    name: "Alice",
    greet: function () {
        console.log("Inside object method:", this.name);
    },
};
obj.greet(); // Output: Inside object method: Alice

// Regular function (non-strict mode)
function regularFunction() {
    console.log("Regular function:", this);
}
regularFunction(); // In browsers, outputs the `window` object

// Arrow function
const arrowFunc = () => {
    console.log("Arrow function:", this);
};
arrowFunc(); // Output depends on the context where arrowFunc is defined
const personSimple = {
    name: "Bob",
};

function sayHello(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

sayHello.call(personSimple, "Hello"); // Output: Hello, my name is Bob
sayHello.apply(personSimple, ["Hi"]); // Output: Hi, my name is Bob
const boundFunction = sayHello.bind(personSimple, "Hey");
boundFunction(); // Output: Hey, my name is Bob
const personFull = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

const anotherPerson = {
    firstName: "Jane",
    lastName: "Smith",
};

// Using call
personFull.fullName.call(anotherPerson); // Output: Jane Smith

// Using apply
personFull.fullName.apply(anotherPerson); // Output: Jane Smith

// Using bind
const boundFullName = personFull.fullName.bind(anotherPerson);
boundFullName(); // Output: Jane Smith

// Arrow function and this
const objArrow = {
    name: "Arrow",
    arrowMethod: () => {
        console.log("Arrow this:", this); // Lexical this (global object in browsers)
    },
};
objArrow.arrowMethod();
