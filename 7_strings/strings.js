//  strings in javascript
const name = " hello "
const repocount = 50
// console .log(name + repocount + "value" )// hello50 value // this is an old way no on e write like this anymore 


//use backticks 

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

// how to declare string

// method 1
// const name = "hello"

// method 2
const gameName =new String('helloworld')
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))  // to check char at specific position
console.log(gameName.indexOf('e')) // to check position of specific char
console.log(gameName.charAt(2))



 //slicing
 const newname = gameName.substring(0,6)
 console.log(newname)

 const anotherstring = gameName.slice(-8,4) //isme hyum negative value bhi de skta hai substring me nhi de ksta diya tabhi vo 0 se hi lega  
console.log(anotherstring)


//to remove staring and ending extra spaces
 const space = "     rishabh      "
console.log(space.trim())


//to replace url data 
const url = "https://rishabh.com/rishabh%20//"
console.log(url.replace('%20','-'))

//we can also ask something is present in url or not 
console.log(url.includes('rishabh')) //true


//split
const naam = "rishabh-rizz-jack"
console,log(naam.split('-'))



//to check more method just copy paste this on inspect --> console  and print this u will get more methods there  const gameName =new String('helloworld')