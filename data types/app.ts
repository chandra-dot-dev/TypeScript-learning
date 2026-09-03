
//variables

let course:string = "TypeScript";

let price:number = 999;

let isCompleted:boolean = false;


course = "Chandra";

// any
let value:any = 200;

value = "Chandra";
value = [];
value ={};

//unknown

let response:unknown = "Chandra";
if(typeof response==="string"){
    console.log(response.toUpperCase());
    
}

// void
function greet():void{
    console.log("Hello");
}

//null 
let user:null = null;

//undefined
let name:undefined;
console.log(typeof name);
