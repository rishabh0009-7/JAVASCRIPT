// let const and var  - keywords
//  variables - kuch bhi agar hume store karna hai to uske liye hume ek memory space chahiye hota hai vo hai variable
// console.log() --> for printing one variable
// console.table([])--> for printing multiple variable at the same time 


// constants 

const accountId =  14444 // ab isko change nhi kiya jaa skata agar const diya hai to //  no reassign  no redeclare 
// accountId = 233 // not possible  error aayega 
// console.log(accountId) // not allowed



//let 
let accountEmail = "rishabletsdot7838@gmail.com" // can reassign but cant redeclare 
accountEmail = "srivastavrishab986@gmail.com"
// console.log(accountEmail) // possible 




var accountPassword = "121323" // can redeclare and also reassign
accountPassword ="32323232"
// console.log(accountPassword) // possible
//we will not use this becoz var is a global scope  bvariable keyword it can creates problem in big source code 
//ex - by mistake we change account password in any part of code it will  get change becoz its a global scope 
//prefere not to use block becoz of issue in block scope and functional scope



accountCity = "jaipur" // kuch nhi likha tabhi print hojayega
accountCity ="bengaluru"
// console.log(accountCity) // possible 
// we can also use this in js  no issue 



//variable declare with no value - js wil take it as undefined 
let accountState; // undefined 


console.table([accountEmail, accountId,accountPassword,accountState])


