//your JS code here. If required.
// Create the student object
const student = {
    name: "John"
};

// Function to get all keys from an object
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Example usage
const myObj = { name: "John", age: 30, city: "New York" };
console.log(myObj.getKeys()); // Output: ["name", "age", "city"]