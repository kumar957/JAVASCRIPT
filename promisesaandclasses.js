// ========================
// 1. Promises in JavaScript
// ========================

console.log("Promise Example:");

// A simple promise
const simplePromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});

// Handling the promise
simplePromise
    .then((message) => {
        console.log("Success:", message); // Outputs: Success: Operation was successful!
    })
    .catch((error) => {
        console.log("Error:", error); // In case of rejection
    });

// ========================
// 2. Chaining Promises
// ========================

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("First Promise Resolved"), 1000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Second Promise Resolved"), 2000);
});

// Chaining multiple promises
firstPromise
    .then((message1) => {
        console.log(message1); // Outputs: First Promise Resolved
        return secondPromise; // Return the second promise
    })
    .then((message2) => {
        console.log(message2); // Outputs: Second Promise Resolved
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// ========================
// 3. Promise with Async/Await
// ========================

const delayedMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Message after 2 seconds"), 2000);
    });
};

const asyncExample = async () => {
    console.log("Before awaiting promise");
    const message = await delayedMessage();
    console.log(message); // Outputs: Message after 2 seconds
    console.log("After awaiting promise");
};

asyncExample();

// ========================
// 4. JavaScript Classes
// ========================

// Defining a Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // A static method (called without an instance)
    static isAdult(age) {
        return age >= 18;
    }
}

// Creating an instance of the class
const person1 = new Person("John", 30);
person1.greet();  // Outputs: Hello, my name is John and I am 30 years old.

// Using the static method
console.log(Person.isAdult(30)); // Outputs: true

// ========================
// 5. Inheritance with Classes
// ========================

// Inheriting from another class
class Student extends Person {
    constructor(name, age, course) {
        super(name, age); // Calling the parent class constructor
        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

// Creating an instance of the subclass
const student1 = new Student("Alice", 22, "Computer Science");
student1.greet(); // Outputs: Hello, my name is Alice and I am 22 years old.
student1.study(); // Outputs: Alice is studying Computer Science.

// ========================
// 6. Using Promises in Classes
// ========================

// Class with a method that returns a promise
class Task {
    constructor(name) {
        this.name = name;
    }

    completeTask() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`${this.name} task completed!`);
            }, 2000);
        });
    }
}

// Creating an instance and handling the promise
const task1 = new Task("Learn Promises");
task1.completeTask()
    .then((message) => {
        console.log(message); // Outputs: Learn Promises task completed!
    })
    .catch((error) => {
        console.log("Error:", error);
    });

