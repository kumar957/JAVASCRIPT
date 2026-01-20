// ========================
// 1. Asynchronous Programming with Callback
// ========================
console.log("Callback Example:");

// A simple asynchronous function using callback
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback("Here is your data.");
    }, 2000); // Simulate a 2-second delay
}

// Calling the function with a callback
fetchData((data) => {
    console.log(data); // Outputs: Here is your data.
});

// ========================
// 2. Asynchronous Programming with Promises
// ========================
console.log("\nPromise Example:");

// A simple promise that resolves after a delay
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetched successfully with Promise!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000); // Simulate a 2-second delay
    });
}

// Using the promise
fetchDataPromise()
    .then((message) => {
        console.log(message);  // Outputs: Data fetched successfully with Promise!
    })
    .catch((error) => {
        console.log(error);
    });

// ========================
// 3. Asynchronous Programming with async/await
// ========================
console.log("\nAsync/Await Example:");

async function fetchDataAsync() {
    console.log("Fetching data...");
    const result = await fetchDataPromise();  // Waiting for the promise to resolve
    console.log(result);  // Outputs: Data fetched successfully with Promise!
}

// Calling the async function
fetchDataAsync();

// ========================
// 4. Handling Multiple Asynchronous Operations (Promises)
// ========================
console.log("\nHandling Multiple Promises:");

function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data 1 fetched"), 1000);
    });
}

function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data 2 fetched"), 1500);
    });
}

function fetchData3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data 3 fetched"), 500);
    });
}

// Using Promise.all to wait for all promises to resolve
Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((messages) => {
        console.log(messages);  // Outputs: [ 'Data 1 fetched', 'Data 2 fetched', 'Data 3 fetched' ]
    })
    .catch((error) => {
        console.log(error);
    });

// ========================
// 5. Error Handling with Async/Await
// ========================
console.log("\nError Handling with Async/Await:");

async function fetchDataWithError() {
    throw new Error("An error occurred while fetching data!");
}

async function handleAsyncError() {
    try {
        const result = await fetchDataWithError();
        console.log(result);
    } catch (error) {
        console.log(error.message);  // Outputs: An error occurred while fetching data!
    }
}

handleAsyncError();

// ========================
// 6. Chaining Promises
// ========================
console.log("\nChaining Promises:");

fetchDataPromise()
    .then((message) => {
        console.log(message);  // Outputs: Data fetched successfully with Promise!
        return "Next step in the chain.";
    })
    .then((nextStep) => {
        console.log(nextStep);  // Outputs: Next step in the chain.
    })
    .catch((error) => {
        console.log(error);
    });

// ========================
// 7. SetTimeout and SetInterval
// ========================
console.log("\nSetTimeout and SetInterval Example:");

console.log("Starting timer...");

// setTimeout: Executes after a delay
setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

// setInterval: Executes repeatedly at specified intervals
const intervalId = setInterval(() => {
    console.log("This message is displayed every 1 second.");
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped.");
}, 5000);
