"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//basic function
function greet() {
    console.log("Hello");
}
greet();
//function with parameters
function greet1(name) {
    console.log("Hello ", name);
}
greet1("Chandra");
// function with multiple parameters
function add(a, b) {
    return a + b;
}
console.log("Sum", add(5, 10));
// optional Parameters
function greet3(name, age) {
    console.log(name, age);
}
greet3("Chandra");
greet3("Chandra", 20);
//Default Parameters
function greet4(name = "Chandra") {
    console.log(name);
}
greet4("Kanth");
// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total += num);
}
// console.log(sum(10,20,30,40,50));
console.log(sum("c", "h", "a", "n", "d", "r", "a"));
// Arrow Function
const add2 = (a, b) => {
    return a + b;
};
console.log(add2(10, 20));
//# sourceMappingURL=app.js.map