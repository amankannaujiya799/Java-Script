console.log("Aman.js loaded successfully!");
let a = 10;
let b = 20;
let sum = a + b;
console.log("The sum of a and b is: " + sum);
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Aman");
export { a, b, sum, greet };
export default {
    a: a,
    b: b,
    sum: sum,
    greet: greet  
};

// End of Aman.js
