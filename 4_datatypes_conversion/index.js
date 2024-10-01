// datatypes conversion and confusion
let score = 33
//yaha to dikh raha daadtype number hai par kaafi baar value  aa rahi hai kahi aur se to pata nhi rehta 
console.log(typeof score) // number 

//datatypes conversion 
// let age = "33abc" //string

// let value = Number(age)  //here we convert  string into number
// console.log(value) // string se number  ho to gya par output pe not a number aayega nan par iska type number hi hai 
//string to number conversion is not possible rest all are possible 


// let  age = null
// let value = Number(age) // 0
// console.log(typeof value )



// let  age = undefined
// let value = Number(age) // nan
// console.log(value )


// let isloggedin = ""
// let boolean = Boolean(isloggedin)
// console.log(isloggedin) //  false 


let isloggedin = "rishabh"
let boolean = Boolean(isloggedin)
console.log(typeof isloggedin) //  true