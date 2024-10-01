// let value = 3 
// let negvalue = -value
// // console.log(negvalue)


// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)
// /
   


//why string to number conversion is confusing
// console.log("1"+2) //12
// console.log("1"+2+2) //122 //why not 14 
// console.log(1+"2") //12
// console.log(1+2+"2") //32

// all this happpen becoz of ecma guidelines  no need to  go in detail 
// dont depend on this method  of writing  code use paranthesis

// console.log("1"+(2)) //12
// console.log("1"+(2+2)) // 14 
// console.log((1)+"2") //12
// console.log((1+2)+"2") //32


//comparisons of datatype in js 
//always compare same datatypes
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)
 

console.log("2">1) //here it will convert  string into number  but always avoid comparing diff datatypes  becoz results are not predictable 

console.log(null>0) //false  
console.log(null==0)//false // yaha nan leliya 
console.log(null>=0) //true  yaha 0 leliya null ko 

// === strict check (it not only check values strictly but also datatypes)

console.log("2"==2) // string to number convert hoga ye then compare 
console.log("2"===2)  //error aayega 


