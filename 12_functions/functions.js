//functions in js 

//1-how to create  function


function saymyname(){
    console.log("rishabh")
}

 saymyname()  //function call

//2-adding 2 no 

// function add2(number1,number2){ //parameters
//     console.log(number1 + number2)
    
// }

// const result = add2(3,4) //argument
// console.log("result:",result) // undefined  becoz result ko return hi nhi kiya



//3-better way of writing function
// function add2(number1,number2){
//     let result = number1+number2
//     return result
// }

// const result = add2(3,4)

// console.log("result:",result) //7


//4-note
// function add2(number1,number2){
//     let result = number1+number2
//     return result
//     console.log("rishabh") //this will not execute kyuki function ka rule hai return ke baad kuch ezxecute nhi hoga 
// }

// const result = add2(3,4)

// console.log("result:",result) //7


//5-best way 
function add2(number1,number2){
    return number1+number2
}

const result = add2(3,4)

console.log("result:",result) //7 ye line imp hai iske bina print nhi hoga dekho uppar eeturn hogya par vo return print nhi hoga jab tak  ye line na likhi ho



// 6-
// function loginusermessage (username){
//     return `${username} just logged in`

// }

// console.log(loginusermessage("rishabh")) //function call and print


//7-note for interview == > dekho agar humne kuch argument pass hi nhi kara () to uski value undefined aayegi

//8-undefined na ayaa uske liye ek mssg dedenge if statement laga ke 

// function loginusermessage (username){
//     if (username== undefined){ //or !username both are same 
//         console.log("please enter your username ")
//         return  // return ka matlab hi exit hai aagr ye if chalta hai yani true hai to yahi se exit hojao  
//     }
//     return `${username} just logged in`

// }

// console.log(loginusermessage()) //function call and print


//9-agar chahta hai ki kabhi bhi undefined ayaa hi na to isko default value dedo

function loginusermessage (username= "sam"){ //agar humne koi bhi value nhi di to ye default value use hogi 
    if (username== undefined){ 
        console.log("please enter your username ")
        return    
    }
    return `${username} just logged in`

}

console.log(loginusermessage()) //function call and print
