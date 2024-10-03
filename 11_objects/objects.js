// // objects in js - same as dictionary in python 
// //jab bhi literals ki tarah banata hai to singleton object nhi banta hai constructors ki tarah banata hai tab banta hai 
 

// //constructor method  - we will not use 
// // object.create 

// // object literals 
// const juser  = {
//     name:"rishabh",
//     // full name : "rishabh sri "
//     age :21,
//     location: "delhi",
//     email:"rishabletsdoit7838@gmail.com",
//     isLoggedIn :false,
//     lastlogindays: ["monday","tuesday"]

// }

// //how to access 
// //method 1 - avoid 
// console.log(juser.email) // this will fail in full name : "rishabh sri"

// //method 2 - use this 
// console.log(juser["email"])



// //how to change key 
// juser.email = "rizzlifts.com"

// // to freeze our Object taaki koi ussme changes na kar ska ab  kara to change na ho 
// // Object.freeze(juser)


// //symbol datatype  //imp for interviews 
// // const mysym = Symbol ("key1")
// // const juser  = {
// //     name:"rishabh",
// //     [mysym] : "mykey1" // always use [] for symbol otherwise type of will come string
// //     age :21,
// //     location: "delhi",
// //     email:"rishabletsdoit7838@gmail.com",
// //     isLoggedIn :false,
// //     lastlogindays: ["monday","tuesday"]

// // }


// //  console.log(juser[mysym])


// //we can aslo add functions  in objects
// juser.greeting = function(){
//     console.log("hello ")
// }
// console.log(juser.greeting())

// //ek aur function add karna hai aur usme name  hai object  ke andar usko acces karna hai 
// //string interpolation karna padeg a yaani backticks mai likho
// juser.greetingtwo = function(){
//     console.log(`hello,${this.name}`)
// }
// console.log(juser.greetingtwo())
// ----------------------------------------------------------------------------------

