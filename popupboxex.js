// ========================
// 1. Alert Box
// ========================
console.log("Alert Box:");
alert("This is an alert box!"); // Displays a message with an OK button

// ========================
// 2. Confirm Box
// ========================
console.log("Confirm Box:");
const userConfirmed = confirm("Do you want to proceed?");
if (userConfirmed) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}

// ========================
// 3. Prompt Box
// ========================
console.log("Prompt Box:");
const userInput = prompt("Please enter your name:");
if (userInput !== null) {
    console.log("User input:", userInput);
} else {
    console.log("User canceled the prompt");
}

// ========================
// 4. Using Popup Boxes for User Interaction
// ========================
function askUser() {
    const age = prompt("How old are you?");
    if (age) {
        const isAdult = age >= 18 ? "an adult" : "not an adult";
        alert(`You are ${isAdult}.`);
    } else {
        alert("You didn't enter a valid age.");
    }
}

// Trigger the function (uncomment to see it in action)
askUser();

// ========================
// 5. Combination of Popup Boxes (Alert, Confirm, Prompt)
// ========================
function checkUserData() {
    const username = prompt("Enter your username:");
    if (username) {
        const isValid = confirm(`Is ${username} your correct username?`);
        if (isValid) {
            alert("Welcome, " + username + "!");
        } else {
            alert("Please enter your correct username.");
        }
    } else {
        alert("No username entered.");
    }
}

// Trigger the function (uncomment to see it in action)
checkUserData();
