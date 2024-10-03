// //arrays in js
// //in c++ it is imp for array to be of sam datatype but it is not necessary fo js
// //js arrays are resizeable this means we can add more arrays  later


// // const myarr= [0,1,2,3,4,5]
// // console.log(myarr[0]) 

// //methods to declare array
// // method1
// const myarr= [0,1,2,3,4,5]

// // method2
// // const myarr2 = new Array(1,2,3,4,5)
// // console.log(myarr2[0]) 


// //array methods 


// //push - used to add more arrays  but  at the last 
// // myarr.push(6)
// // myarr.push(7)
// // console.log(myarr)

// //pop - to remove last array
// // myarr.pop()
// // console.log(myarr)

// //unshift  - used to add more arrays but at the start 

// // myarr.unshift(9)
// // console.log(myarr)

// // //shift = used to remove first array 
// // myarr.shift()

// // //includes - check certain array is present or not 
// // console.log(myarr.includes(9))

// // //index - wil tell index of the elemnt  // outpugt = -1 means ity does not exist 
// // console.log(myarr.indexOf(3))


// //join - will join 2 arrays and  change its type to string 
// // const newarr= myarr.join()
// //  console.log(newarr)
// //  console.log(typeof newarr)

//  //slice and splice 

//  //slice 
//  console.log("A original", myarr)

//  const myn1 = myarr.slice(1,3)
//  console.log("after slice",myn1)
//  console.log("B original now after slice  ",myarr)


//  const myn2 = myarr.splice(1,3)
//  console.log("after splice ",myn2)
//  console.log("c original now after splice  ",myarr)

// output

//   original [ 0, 1, 2, 3, 4, 5 ]
// after slice [ 1, 2 ]
//  original now after slice   [ 0, 1, 2, 3, 4, 5 ] //remains same 
// after splice  [ 1, 2, 3 ]
// c original now after splice   [ 0, 4, 5 ] //values hi original maise  hat gyi
 

//  diff between slice and splice is jab slice karta hai to  ek kam tak hota hai matlab agar 0,3 liya to 2 tak hoga  aur usme original mai change nhi hota kuch  
//  splice mai jab splice karta hai to agar 0,3 kara  to 3 include hota hai aur splice mai original bhi change ho jataa hai matlab ki agar splice kiya to original mai se hi hatt jayega 
// ---------------------------------------------------------------------------------


const marvel_heroes= ["thor","ironman","spiderman "]
const dc_heroes = ["superman","batman","flash"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
//ab isko dekh ke lagta hai ki  merge hojayega par aisa nhi hai isme array ke andar array aa jayega  


//concat retrns a new array to usko new array mai daalkar fir chalana  ye merge kar dega par sirf 2
const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes)

//spread - ye bhi merge hi karta hai  par kitna bhi ho sabko 

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

//flat - agar array ke nadar array hai bht sare to unko normal karne ke liye ww use this 

const another_arr = [1,2,[4,5],7,[6,7,[8,9]]]
const real_another_array = another_arr.flat(Infinity )
console.log(real_another_array)

//creating array another method 
// asking questions - isArray
console.log(Array.isArray("rishabh")) //false 
// to create - from Array 

console.log(Array.from ("rishabh")) // it will create a new array 
console.log(Array.from ({name:"rishabh"}))// object ko array bana chaha isliye ye empty array dega 

//converting variable  to array - ofArray
let scoere1 = 100
let scoere2= 100
let scoere3 = 100

console.log(Array.of(scoere1,scoere2, scoere3))