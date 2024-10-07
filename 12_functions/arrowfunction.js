// This keyword and arrow function in js 


//this --> this keyword is used for current context ko refer karne liye   jiski abhi baat kar raha hai 
// // this.username means ki abhi current context mai jo username hai vo use karo 

//note -1
// const user = {
//     username: "rishabh",
//     price:999,
//     welcomemessage: function(){
//         console.log(`${this.username},welcome to wesbite`)
//     }
// }
// user.welcomemessage() //rishabh,welcome to wesbite
// user.username = "sam"
// user.welcomemessage() //sam,welcome to website 

//ye sam waali line isliye aa payi kyuki humne this keyword use kiya tha isliye isna current context ko liya 

//note -2
// const user = {
//     username: "rishabh",
//     price:999,
//     welcomemessage: function(){
//         console.log(`${this.username},welcome to wesbite`)
//         console.log(this) //isko lagana se pura object ka current context ajayega
//     }
// }
// user.welcomemessage() //rishabh,welcome to wesbite
// user.username = "sam"
// user.welcomemessage() //sam,welcome to website 

//output - this ka current context ye pura  object hi hai to isliye ye ayaa 
// {
//     username: 'rishabh',
//     price: 999,
//     welcomemessage: [Function: welcomemessage]
//   }
//   sam,welcome to wesbite
//   {
//     username: 'sam',
//     price: 999,
//     welcomemessage: [Function: welcomemessage]
//   }



// // note - 3 
// const user = {
//     username: "rishabh",
//     price:999,
//     welcomemessage: function(){
//         console.log(`${this.username},welcome to wesbite`)
//     }
// }
// console.log(this) 
// note imp// {} empty object aayega kyuki ye bahar hai + node environmemt   ke  andar hai  yahi browser pe kiya to  browser ke andar jo global object hai vo window object hai  



//note - 4 this keyword can only be used in objects not in functions 
// function chai (){
//     let username = "rishabh"
//     console.log(this.username); //undefined  //here this keyword will not work 
    
// }
// chai()


//arrow functions

//before 
// const chai = function () {
//     let username = "rishabh"
//     console.log(username);
    
// }
// chai ()

// //using arrow function 
// const chai = () =>{
// let username = "rishabh"
//     console.log(username);
// }
// chai()


//basic arrow function (explicit return)
// const add2 = (num1,num2)=>{
//     return num1 + num2

// }
       
// console.log(  add2(3,4));


//implicit return arrow function // no need of {} and return 
// const add2 = (num1,num2)=>(num1 + num2)
// console.log(  add2(3,4));

//if u use {} curly braces then return will be used  and if u use paranthesis () return will not used 


// how to use object in arrow function 

const object  = ()=> ({username:"rishabh"})
console.log(object());


//concept 
//iife (immediately  invoked function expression) -> jaise function likha turant execute ho jaye 
//why we use --> taaki global scope se pollution na ho + immediately execute hojaya 
//kayi baar global scope ke pollution se problems create hoti hai to vo na ho isliye we use iife
//how to write 
 //named iife 
(function chai (){
   console.log("db connected ");
    
})(); //semicolon is a must varna erro aayega next time iife use kiya to 

//in arrow function
( ()=>
    console.log("db connected 2")
    

)();


//passing variable - unnamed iife 

((name )=>
    console.log(`db connected 3 ${name}`)

)('rishabh')