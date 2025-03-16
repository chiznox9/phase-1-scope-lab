// Write your solution in this file!
// 1️⃣ Declare customerName in global scope
var customerName = "bob";

// 2️⃣ Function to uppercase the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3️⃣ Declare bestCustomer in global scope & define a function to set it
function setBestCustomer() {
    bestCustomer = "not bob"; // No `var`, `let`, or `const`, making it global
}

// 4️⃣ Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

// 5️⃣ Declare leastFavoriteCustomer as a constant (cannot be reassigned)
const leastFavoriteCustomer = "someone";

// 6️⃣ Function that tries to change leastFavoriteCustomer (should fail)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "anyone else"; // This should fail due to `const`
}
