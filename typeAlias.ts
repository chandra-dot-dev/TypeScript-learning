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
