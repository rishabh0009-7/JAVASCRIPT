// global and local scope in js 
// {}--> scope 


if (true ){
    let a = 10 
    const b = 20
    var c = 30 
}

console.log(a) // this will not execute becoz let is local scope 
console.log(b) //this will aslo not execute becoz const is also a local scope 
console.log(c) // this will get executed  becoz var is a global scope //30 

// isliye var ko avoid hi kiya jata  hai 

//note --> browser ke andar scope and node environment ke andar scope alag hai 