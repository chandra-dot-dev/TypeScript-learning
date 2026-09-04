//type alias with objects

type chandra = {
  id: number;
  name: string;
  age: number;
};

let user: chandra = {
  id: 1,
  name: "Chandra",
  age: 22,
};

let student: chandra = {
  id: 2,
  name: "rahul",
  age: 20,
};

// type alias with array

type kanth = { id: number; name: string }[];
let students1: kanth = [
  {
    id: 1,
    name: "chandra",
  },
  {
    id: 2,
    name: "Kanth",
  },
];

// type aliases with function

let add = (a: number, b: number): number => a + b;

type calculation = (a: number, b: number) => number;

let sub: calculation = (a, b) => a - b;

let mul: calculation = (a, b) => a * b;

// UNION TYPES

type userId = number | string;
let id1:userId = 101;
let id2:userId = "Chandra";


type statusType = "Success" | "Pending" | "Failed";

let status:statusType = "Success";

//Intersection Types

type person ={
    name:string,
    age:number
}
type employee = {
    employeeId : number,
    salary :number
}

type staff = person & employee

let staff1:staff = {
    name:"Chandra",
    age:21,
    employeeId : 2001,
    salary:3000
}

//Type aliases with primitive types

type username = string | number;

let firstname : username = "chandra";
let lastname : username = "Kanth";
