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



// const tinderuser = new Object() // we can also do like  this to create an object 

const tinderuser = {} //empty object 

tinderuser.id = "123abc"
tinderuser.name = "rishabh"
tinderuser.loggedin = false
console.log(tinderuser)


// we can aslo create obejct ke andar object 
// const regularuser= {
//     email:"rishabletsdoit7838@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "rishabh",
//             lastname :"srivatsav"
//         }

//     }
// }


// //how to access
// console.log(regularuser.fullname.userfullname.firstname)


// //jaise arrays ko combine kiya tha vaise hi object sko bhi kar skta hai
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

// // const obj3 = {obj1,obj2} /// aisa kara  object ke nadar object ajayega 

// //  assign --  avoid  less use 
// // const obj3 = object.assign({},obj1,obj2) 

// //spread
// const obj = {...obj1,...obj2}
// console.log(obj) 

//jab database se value ayegi to array of objects aayega 
//array ke andar bht saare objects
const users = [
    {
        id:1,
        email:"rishab@gmail.com",
    },
    {
        id:1,
        email:"rishab@gmail.com",
    },
    {
        id:1,
        email:"rishab@gmail.com",
    }
]
//how to access 
users[1].email // iska matlab hai ki user ka 1 st walaa acces karna hai jo ki hai object isliye .lagaya 


//kisi object ki saare keys print karana hai 
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))

//entries - iska use se har key ko ek  alag array mai daal diya jataa hai 
console.log(Object.entries(tinderuser))

//koi value exist karti hai ya nhi vo pata lagana ke lie 
console.log(tinderuser.hasOwnProperty('islogged'))