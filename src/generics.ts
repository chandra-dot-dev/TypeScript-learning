
function getValu<T,K>(value:T,value1:K):void{
    console.log(value);
    console.log(value1);
    
}

getValu(50,"Chandra");

// Generic Interface

interface user{
    name:string,
    age:number
}

interface chandra<T,K>{
    name: string,
    data:T
}

let user1:chandra<number[],string> ={
    name:"Chandra",
    data:[20,30]
}
let user2:chandra<number,string>={
    name:"chandra",
    data:101
}

//Generic Constrains