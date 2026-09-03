//basic function
function greet(): void {
  console.log("Hello");
}
greet();

//function with parameters

function greet1(name: string): void {
  console.log("Hello ", name);
}
greet1("Chandra");

// function with multiple parameters

function add(a: number, b: number): number {
  return a + b;
}
console.log("Sum", add(5, 10));

// optional Parameters
function greet3(name: string, age?: number) {
  console.log(name, age);
}
greet3("Chandra");
greet3("Chandra", 20);

//Default Parameters

function greet4(name: string = "Chandra"): void {
  console.log(name);
}
greet4("Kanth");

// Rest Parameters

function sum(...numbers: string[]): string {
  return numbers.reduce((total, num) => (total += num));
}
// console.log(sum(10,20,30,40,50));
console.log(sum("c", "h", "a", "n", "d", "r", "a"));

// Arrow Function
const add2 = (a: number, b: number): number => {
  return a + b;
};
console.log(add2(10, 20));

//function Returning an Array
function getNumbers(): number[] {
  return [10, 20, 30];
}
console.log(getNumbers());

//function returning an object
function getUser(): {
  name: String;
  age: Number;
  isAdmin:boolean
} {
  return {
    name: "Chandra",
    age: 22,
    isAdmin : true
  };
}
console.log(getUser());
