// numbers and math in javascript
// const score = 400 //here datatype is not mention 
//or
// //us this if u want to mention datatyype 
// const score = new Number(400.33232)
// console.log(score)

// //to know more methods copy paste  this on console   const score = new Number(400)
// // console.log(score)

// console.log(score.toString()) //it will convert  number into string 
// // console.log(score.toFixed(2)) //it will give upto 2 decimal precison
// console.log(score.toPrecision(3)) // precison with roundoff

// const hundred = 10000000
// //isme commas lagana hai to localestring
// console.log(hundred.toLocaleString('en-IN'))


//MAThs 
// console.log(Math)
// console.log(Math.abs(-4)) // absolute mai sign change hota hai -ve se +ve
// console.log(Math.round(4.3)) // roundoff hojata hai 
// console.log(Math.ceil(4.2)) //5 /// isme max value leta hai 
// console.log(Math.floor(4.2)) //4 /// isme min /lowest  value leta hai 
// console.log(Math.min(4.2,2,3,7,)) //2/// isme min  value  bta dega 
// console.log(Math.max(4.2,2,3,4,)) //4.2/// isme max value bta dega
// console.log(Math.random()) // isme random values dega 0 se 1 ke beech mai 
// console.log((Math.random()*10 +1 )) // +1 isliye taaki 0 na ayaa 

//hum chahte hai ki random value ayaa par hamari marzi ki range mai 0 and 1 nhi to uske liye forumla 

const max = 20 
const min = 10

console.log(Math.random()*(max- min +1) + min ) //learn
// aur agar roundoff mai chahiye 
console.log(Math.floor(Math.random()*(max- min +1) + min )) //learn



