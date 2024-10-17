//javascript and classes

//does js contain classes ?
// yes but no  becoz js is a prototype based lang  so bts prototype hi chalta hai
//Classes in JavaScript are syntactic sugar over constructor functions and prototypes, providing a more structured and readable way to create objects

//inshort classes sirf naam ke liye bolta hai actually mai prototype  lang hi  hai uspe sugar karke boldiya classes

//oop-->programming paradigm  hai yani code likhan ka structure kaisa hota hai

//object -->collection of properties and methods -->tolowercase etc
//properties -- >variables and methods -->function

//why use oop --> iske bina code kaafi messy ho gya tha usko avoid karne ke liye we use this

//parts of oop
//object literal--> yani singleobject hi le rah ahai {}

const user ={
   username:"rishab",
   logincount:9 ,
   getuserdetail:function () {
    // console.log(`username${username}`); //undefined aayega kyuki ye scope se bahar  hai username 
    console.log(`username${this.username}`) // this use karna se error nhi aayega 
   }
}
console.log(user);
console.log(user.getuserdetail);


//constructor function
//prototypes
//classes
//  instances
