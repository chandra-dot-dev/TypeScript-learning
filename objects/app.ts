// object

let user: { name: string; age: number } = {
  name: "Chandra",
  age: 22,
};

// nested Object
let student: { name: string; address: { city: string; pincode: number } } = {
  name: "Chandra",
  address: {
    city: "vizag",
    pincode: 515411,
  },
};

// Array of objects

let users: {id:number,name:string}[] = [
    {
        id:1,
        name:"chandra"
    },
    {
        id:2,
        name:"kanth"
    }
];

//Tuple Arrays

let marks2:[string,number][] = [["Chandra",55],["Kanth",54]];