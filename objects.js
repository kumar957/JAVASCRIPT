// ========================
// 1. Using Object Literals
// ========================
const person1 = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person1.greet();  // Outputs: Hello, my name is Alice

// ========================
// 2. Using the Object Constructor
// ========================
const person2 = new Object();
person2.name = "Bob";
person2.age = 30;
person2.greet = function() {
    console.log("Hello, my name is " + this.name);
};
person2.greet();  // Outputs: Hello, my name is Bob

// ========================
// 3. Using Object.create() Method
// ========================
const personTemplate = {
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
const person3 = Object.create(personTemplate);
person3.name = "Charlie";
person3.age = 35;
person3.greet();  // Outputs: Hello, my name is Charlie

// ========================
// 4. Using a Constructor Function
// ========================
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}

const person4 = new Person("David", 40);
person4.greet();  // Outputs: Hello, my name is David

// ========================
// 5. Using ES6 Classes
// ========================
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

const person5 = new PersonClass("Eve", 45);
person5.greet();  // Outputs: Hello, my name is Eve

// ========================
// 6. Using Factory Functions
// ========================
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log("Hello, my name is " + this.name);
        }
    };
}

const person6 = createPerson("Frank", 50);
person6.greet();  // Outputs: Hello, my name is Frank

// ========================
// 7. Using the Spread Operator for Object Copying
// ========================
const person7 = {
    name: "Grace",
    age: 55,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
const copiedPerson = { ...person7 };  // Create a copy of the person7 object
copiedPerson.greet();  // Outputs: Hello, my name is Grace

// ========================
// 8. Using Dynamic Property Names
// ========================
const propertyName = "name";
const person8 = {
    [propertyName]: "Hannah",
    age: 60,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person8.greet();  // Outputs: Hello, my name is Hannah

