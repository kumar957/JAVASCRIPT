const regex = /(\d{3})-(\d{3})-(\d{4})/;
const str = "My phone number is 123-456-7890";

// Check if the pattern exists
if (regex.test(str)) {
    console.log("Valid phone number format!");

    // Retrieve detailed match information
    const match = regex.exec(str);
    console.log("Full match:", match[0]); // 123-456-7890
    console.log("Area code:", match[1]); // 123
    console.log("Prefix:", match[2]);    // 456
    console.log("Line number:", match[3]); // 7890
}
