// //dates 

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())// converting dates into string
// console.log(myDate.toDateString()) 
// console.log(myDate.toLocaleString())
// console.log(typeof myDate) // object  //imp 



// let mycurrentdate = new Date(2024,0 , 23) // in js month starts from 0

// console.log(mycurrentdate.toDateString())

// let mycurrentdate = new Date("01-14-2024")
// console.log(mycurrentdate.toLocaleDateString())



//time stamp - used in quizzes , polls for finding fastest fingers etc 
// //1 jan se abhi tak ka time milli seconds mai 
// let mytimestamp = Date.now()
// console.log(mytimestamp) // ye milliseconds mai ataa hai 

// console.log(Math.floor(Date.now()/1000)) // seconds mai ajayega 
// console.log(mycurrentdate.getTime())

//some more methods with date 
let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) // 9 becoz 0 se start hu  hai na isliye varna 10 ataa agar 1 se hota 
console.log(newDate.getFullYear())
console.log(newDate.getDay())

//we can also customize date format
console.log(newDate.toLocaleString('default',{
    weekday :"long"
} ))
