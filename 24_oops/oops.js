// //javascript and classes

// //does js contain classes ?
// // yes but no  becoz js is a prototype based lang  so bts prototype hi chalta hai
// //Classes in JavaScript are syntactic sugar over constructor functions and prototypes, providing a more structured and readable way to create objects

// //inshort classes sirf naam ke liye bolta hai actually mai prototype  lang hi  hai uspe sugar karke boldiya classes

// //oop-->programming paradigm  hai yani code likhan ka structure kaisa hota hai

// //object -->collection of properties and methods -->tolowercase etc
// //properties -- >variables and methods -->function

// //why use oop --> iske bina code kaafi messy ho gya tha usko avoid karne ke liye we use this


// //object literal--> yani single object hi le raha hai {}
// //ex-
// const user ={
//    username:"rishab",
//    logincount:9 ,
//    getuserdetail:function () {
//     // console.log(`username${username}`); //undefined aayega kyuki ye scope se bahar  hai username 
//     console.log(`username${this.username}`) // this use karna se error nhi aayega 
//    }
// }
// console.log(user);
// console.log(user.getuserdetail);

//---------------------------------------------------------
// //parts of oop


// //1- constructor function -- > allow us to make ek hi object literal se multiple instances (new keyword new context banana ke kaam ataa hai ) 
// //ex- ye new keyword jo hai vo hai constructor function
// const promiseone = new Promise()
// const date = new date 

// //ex-  some new concept
function User(username, loginCount, isLoggedIn){
   username = username //to isme confuse hojayega 2-2 username kya hai konsa variable hai aur konsa usak data to isliye yaha pe  ya to naam alag rakh lo par agar naam bhi same rakhna hai na to this keyword laga lo 
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn


   return this // ye likho ya ni farak nhi padta 
}

// //ex-   why we use constructors
// const userOne = User("rishabh", 12, true)
// console.log(userOne)
// //output username: 'rishabh',
// //   loginCount: 12,
// //   isLoggedIn: true,

// const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne)
// //output -- user one  dubara print karne pe change hogya 
// // username: 'ChaiAurCode',
// //   loginCount: 11,
// //   isLoggedIn: false,
 
//yaha user mai pehle userone ka data tha fir user mai user2 ka data agya aur userone ka gayab hogya to jab humne userone ko dubara acces kiya to uska data gayab tha aur usne user 2 ka dikhaya isse bachna ke liye we use new keyword which is a constructor


//saare ke saare value overwrite kardi pichla walaa delete hogya  to alag context banana hoga isliye we use constructors taaki overwrite na ho overwrite se puarana delete hojata hai 
//isliye promises mai hum new use kar raha tha har baar taaki overwrite na ho uski alag context yani alag copy banna


const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);


//some imp info about new keyword --> jab bhi new use hota hai to ek empty obejct create hota hai jisko instance bola jataa hai --> constructor  function call hota hai new keyword ki wajah se jo arguments  hota hai unhe pack kardeta hai  aur dedeta  --> third step mai jo  bi argument hai vo this keyword mai inject hojata hai --> aur last step mao function mai mil jataa hai 





//prototypes
//classes
//  instances


//4 pillars (read from chatgpt  )
//abstractionn 
//encapsulation
//inheritance
//polymorphism
