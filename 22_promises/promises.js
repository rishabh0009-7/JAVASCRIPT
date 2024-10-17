
// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner, more powerful way to handle asynchronous tasks (like fetching data from a server, reading files, or making timeouts) than traditional callback functions, helping to avoid issues like callback hell.

//It has three states:
// Pending: The initial state—neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.



//promise -->koi task hai vo abhi  nhi hoga par hopefully future mai ho skta hai complete   ya nhi bhi 
//jab promises nhi ayaa tha usse pehle hum bluebird library use karta tha 


// const promise = new Promise((resolve, reject) => {
  // Asynchronous operation here...
  
//   if (success) {
//     resolve("Operation Successful");  // Marks the promise as fulfilled
//   } else {
//     reject("Operation Failed");  // Marks the promise as rejected
//   }
// });

// Methods to handle Promises:
// .then() for success.
// .catch() for errors.
// .finally() for cleanup, regardless of success or failure.


//how to create promises 
// const promise1= new Promise(function(resolve,reject){
//     //doany async task //ex- db calls etc 
//     setTimeout(function () {
//         console.log('async task is completed ');
//         resolve() //ye imp hai varna connect nhi hoga then se 
//     },1000)
// })

// promise1.then(function(){
//     console.log('promise consumed');
    

// })

//more short way 
// const promise2= new Promise(function(resolve,reject){
//     //doany async task //ex- db calls etc 
//     setTimeout(function () {
//         console.log('async task 2is completed ');
//         resolve() //ye imp hai varna connect nhi hoga then se 
//     },1000)
// }).then(function(){
//     console.log('async 2 resolved');
    

// })


// const promise3= new Promise(function(resolve,reject){
//     //doany async task //ex- db calls etc 
//     setTimeout(function () {
//         resolve({username:"chai",email:"chai@example.com"}) //ye imp hai varna connect nhi hoga then se 
//     },1000)
// })
// promise3.then(function(user){
//     console.log(user);
    

// })


//output
// { username: 'chai', email: 'chai@example.com' }

//promise mai error handling and .then chaining for data ke andar data 
// const promise4= new Promise(function(resolve,reject){
//     //doany async task //ex- db calls etc 
//     setTimeout(function () {
//         let error = true
//         if (!error){

//             resolve({username:"chai",email:"chai@example.com"})
//         }else {
//             reject('something went wrong ')
//         }
//     },1000)
// }) 
// promise4.then(function(user){
//     console.log(user);
//     return user.username
    

// }).then(function(username){
//     console.log(username);
    
// }).catch(function (error) { //error  handle if any 
//     console.log(error);
    
// }).finally(()=>{ //ye default hai  ye to aayega  hi hamesha 
//     console.log('promise is either resolved or rejected ');
    
// })


//-------------------------------------------------------------------------
//using async await instead of  .then .catch
//async and await are modern JavaScript features that make working with promises easier by allowing you to write asynchronous code in a more synchronous and readable style. They help avoid complex promise chains and improve readability by replacing .then() and .catch() with a more structured, linear approach.
//async: Declares that a function is asynchronous. An async function always returns a promise.
// await: Pauses the execution of the function until the promise is resolved or rejected. It can only be used inside async functions





//async await ka main problem hai ki it cannot handle errors isliye agar erro ayaa to we cant  use this


// const promise5= new Promise(function(resolve,reject){
//     //doany async task //ex- db calls etc 
//     setTimeout(function () {
//         let error = false
//         if (!error){

//             resolve({username:"chai",email:"chai@example.com"})
//         }else {
//             reject('error: something went wrong ')
//         }
//     },1000)
// }) ;


// async function consumepromise5() {
//     const response =  await promise5
//     console.log(response);
    
// }
// consumepromise5( )


//how to handle error in async await ? -->put it in try catch block

// const promise5= new Promise(function(resolve,reject){
//     //doany async task //ex- db calls etc 
//     setTimeout(function () {
//         let error = true //error hai iss time 
//         if (!error){

//             resolve({username:"chai",email:"chai@example.com"})
//         }else {
//             reject('error: something went wrong ')
//         }
//     },1000)
// }) ;


// async function consumepromise5() {
//     try {
//         const response =  await promise5
//     console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
    
// }
// consumepromise5( )


//some glimpse of using fetch 

// const promise6 = new Promise(function(resolve,reject){
//     //doany async task //ex- db calls etc 
//     setTimeout(function () {
//         let error = true //error hai iss time 
//         if (!error){

//             resolve({username:"chai",email:"chai@example.com"})
//         }else {
//             reject('error: something went wrong ')
//         }
//     },1000)
// }) ;


// async function getAllUsers() {
//     try {
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response); //ye agya par format karna padega 
        
//         // const data = response.json() // string se json  mai convert hojya response par isme time lagega to isko bhi await karana padega 

//         const data =await response.json()
//         console.log(data); //ye correct way hai
        
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
    
// }
// getAllUsers( )


//more better way of    using fetch 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
console.log(data);

})
.catch((error)=>{
console.log(error);

})


//note - agar uppar waala bhi uncomment kardia aur sabko run kiya to fetch waala  output  pehle ayega aisa kyu??
// kyuki fetch ke liye alag se task queue banti hai  micro task queue /priority queue  jisme call back hota hai for refernce check   fetch .png