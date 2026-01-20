// ========================
// 1. setTimeout: Delays execution of a function
// ========================
console.log("Before setTimeout");

const timeoutId = setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000); // Delay in milliseconds (2000ms = 2s)

console.log("After setTimeout");

// ========================
// Clearing setTimeout
// ========================
clearTimeout(timeoutId); // The scheduled timeout will not execute
console.log("setTimeout cleared");

// ========================
// 2. setInterval: Repeats execution at specified intervals
// ========================
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stops the interval after 5 executions
        console.log("setInterval cleared");
    }
}, 1000); // Repeat every 1 second

// ========================
// 3. Using setTimeout to Create Delayed Loops
// ========================
function delayedLoop(iterations, delay) {
    let i = 0;
    function loop() {
        if (i < iterations) {
            console.log(`Loop iteration: ${i}`);
            i++;
            setTimeout(loop, delay); // Schedule the next iteration
        }
    }
    loop();
}
delayedLoop(3, 500); // Executes 3 iterations with a 500ms delay between each

// ========================
// 4. Immediate Execution with setTimeout (0ms delay)
// ========================
console.log("Before setTimeout with 0ms delay");
setTimeout(() => {
    console.log("Executed after 0ms (placed in the event queue)");
}, 0);
console.log("After setTimeout with 0ms delay");

// ========================
// Use Case: Countdown Timer
// ========================
function countdown(seconds) {
    let remaining = seconds;
    const countdownId = setInterval(() => {
        console.log(`Time left: ${remaining}s`);
        remaining--;
        if (remaining < 0) {
            clearInterval(countdownId);
            console.log("Countdown finished!");
        }
    }, 1000);
}
countdown(5); // Starts a countdown from 5 seconds
