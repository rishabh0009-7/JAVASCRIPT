// //note - for each koi bhi value return nhi karta hai  vo undefined hi deta hai hamesha 


//return ka matlab humne agar  purana walaa ko new variable mai dalaa to vo new variable output deta hai ya nhi 
// const coding = ["js","rb","py","java" ,"cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item  //undefiend 
    
// })
// console.log(values );  //undefined 

// //par agar hume koi cheez maan lo return karani hai print nhi karani to vo for each loop  mai nhi ho skta to iske liye apna pass methods hai kuch 


//--------------------------------------------------------------------------------
// //filter method  - used to crete new array from  existing array 
// //ex- ek array hai usme sirf  4 se bada number  chaiye  to uskalag array bnanahai isliye we will use filter
// // const myNum= [1,2,3,4,5,6]

// // const newnums= myNum.filter((num)=> {
// //     return num>4
// // }
// // )
// // console.log(newnums);


// //curly braces lagaya hai to return likhna hi padega



// // for each se bhi same filter jaisa kaam kar skta hai
// const myNum= [1,2,3,4,5,6]
// const  newnums =[]

// myNum.forEach((num)=> {
//     if (num>4){
//         newnums.push(num)
//     }
// });
// console.log(newnums);

//both are correct koi bhi karo

//some more filter use

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const userbook = books.filter((bk)=> bk.genre =='History')
//   userbook = books.filter((bk)=>bk.publish>=2000)
//   console.log(userbook);
  


//-----------------------------------------------------------------------------------

//map method =-> filter jo hai vo chaan deta hai par map se hum koi bhi function kara skta hai 
//maan lo  array mai har pe 10 add karna hai 
//  const mynums= [1,2,3,4,5,6,7,8]

//  const  newnums = mynums.map((nums)=>nums+10)
//  console.log(newnums);
 


 //we can aslo do this by using for each
 //------------------------------------------------------------------------------

 //chaining  ->ek ke andar ek method use kar skta hai 
//  const mynums= [1,2,3,4,5,6,7,8]

//  const newnums = mynums
//             .map((num)=>num*10)  //ex- 1*10=10,20,30,40..
//             .map((nun)=>nu+1)//10+1=11,21,31,41...
//             .filter((num)=>num>=40) //41,51,61,71,81
// console.log(newnums);

//----------------------------------------------------------------------------
//reduce method - used to reduce array into single value  
// starting mai accumulator ki value  initail value ke barabar hoti hai jaise jaise initial value update hota hai accumulator bhi update hogta hai 

//basic structure 
// const array1 = [1,2,3,4]
// //0+1+2+3+4
// const initailvalue = 0
// const suminitialvalue = array1.reduce((accumulator ,currentvalue)=>accumulator + currentvalue,initailvalue)  // (0,1)=>0+1,0+1 now after this (0+1,2)=>0+1+2,0+1+2

// console.log(suminitialvalue); // 10


//more short way --> instead of writing a seperate initial value = 0 write just 0 

const array1 = [1,2,3,4]
//0+1+2+3+4
const suminitialvalue = array1.reduce((accumulator ,currentvalue)=>accumulator + currentvalue,0)  // (0,1)=>0+1,0+1 now after this (0+1,2)=>0+1+2,0+1+2

console.log(suminitialvalue); // 10


//ye saare method for each se , for of ,while kisi se bhi ho skta hai par har baar push thodi karenge isliye ye methods use karna zaruri hai

//more example - shopping cart ke nadar jitna price hai unko add kardo 
const shoppingcart = [
    {
        itemname:"jscourse",
        price:599
    },
    {
        itemname:"pycourse",
        price:5999
    },
    {
        itemname:"rubycourse",
        price:5929
    },
    
]
//we can aslo do thi  by foreach 

const newprice = shoppingcart.reduce((acc,cv)=>acc+cv.price,0)
console.log(newprice);
