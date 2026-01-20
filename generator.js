// ========================
// 1. Basic Generator Function
// ========================
console.log("Basic Generator Example:");

function* myGenerator() {
    yield "First Value";
    yield "Second Value";
    yield "Third Value";
}

// Create a generator object
const generatorObj = myGenerator();

// Using the generator
console.log(generatorObj.next().value); // Outputs: First Value
console.log(generatorObj.next().value); // Outputs: Second Value
console.log(generatorObj.next().value); // Outputs: Third Value
console.log(generatorObj.next().value); // Outputs: undefined (end of generator)

// ========================
// 2. Generator with Return Statement
// ========================
console.log("\nGenerator with Return:");

function* myGeneratorWithReturn() {
    yield "First Value";
    yield "Second Value";
    return "Done";
}

const genWithReturn = myGeneratorWithReturn();

console.log(genWithReturn.next().value); // Outputs: First Value
console.log(genWithReturn.next().value); // Outputs: Second Value
console.log(genWithReturn.next().value); // Outputs: Done
console.log(genWithReturn.next().value); // Outputs: undefined (generator has finished)

// ========================
// 3. Using a Generator with Loops
// ========================
console.log("\nUsing Generator with a Loop:");

function* countUpTo(limit) {
    let count = 0;
    while (count < limit) {
        yield count;
        count++;
    }
}

const counter = countUpTo(3);

for (let value of counter) {
    console.log(value); // Outputs: 0, 1, 2
}

// ========================
// 4. Generator with Parameters
// ========================
console.log("\nGenerator with Parameters:");

function* multiplyBy(factor) {
    let num = 1;
    while (num <= 5) {
        yield num * factor;
        num++;
    }
}

const multiplier = multiplyBy(2);
console.log(multiplier.next().value); // Outputs: 2
console.log(multiplier.next().value); // Outputs: 4
console.log(multiplier.next().value); // Outputs: 6
console.log(multiplier.next().value); // Outputs: 8
console.log(multiplier.next().value); // Outputs: 10

// ========================
// 5. Generator with `yield` and `next` Usage
// ========================
console.log("\nUsing `yield` and `next` together:");

function* idGenerator() {
    let id = 0;
    while (true) {
        id++;
        const reset = yield id;  // `yield` returns the id, and `reset` receives a value from .next()
        if (reset) {
            id = 0; // Reset id to 0 if `reset` is true
        }
    }
}

const gen = idGenerator();
console.log(gen.next().value);  // Outputs: 1
console.log(gen.next().value);  // Outputs: 2
console.log(gen.next(true).value);  // Outputs: 1 (resetting id)
console.log(gen.next().value);  // Outputs: 2

// ========================
// 6. Generator Delegation
// ========================
console.log("\nGenerator Delegation:");

function* mainGenerator() {
    yield "Start";
    yield* secondaryGenerator();  // Delegating to another generator
    yield "End";
}

function* secondaryGenerator() {
    yield "Middle";
}

const genDelegated = mainGenerator();

console.log(genDelegated.next().value); // Outputs: Start
console.log(genDelegated.next().value); // Outputs: Middle
console.log(genDelegated.next().value); // Outputs: End

