//functions with objects and array in js 

  
// function calculatecartprice(num1){
//     return num1
// }
// console.log(calculatecartprice(200,400,450)) //200



//note -> //rest operator- jo bhi item aise bikhra hua hai to usse bundle mai pack karke dedo
//bht saare argument dediya humne aur parameter sirf ek tpo vo pehle walaa hi arhument utha lega  to isse bachna ke liye we use rest operator 
//taaki function mai multiple value /argument pass ho ska 
// function calculatecartprice(...num1){
//     return num1
// }
// console.log(calculatecartprice(200,400,450))  //[ 200, 400, 450 ]



// note ->
// function calculatecartprice(val1,val2,...num1){
//     return num1
// }
// console.log(calculatecartprice(200,400,450,600,40009,234))  //[ 450, 600, 40009, 234 ]


//passing object in function
//method 1 
// const user ={
//     username:"rishabh",
//     price:199
// }

// function handleobject (anyobject){
//     console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)

// }

// handleobject(user)

//method 2 



function handleobject (anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)

}

handleobject({    //function call mai hi object bana diya 

    username:"rishabh",
    price:199
})



//passing array in function 
// method 1 
// const mynewarray = [200,300,400,500,600]

// function handlearray (getArray){
//     return getArray[0]
// }
// console.log(handlearray(mynewarray)) //function call and print


//method 2

function handlearray (getArray){
    return getArray[0]
}
console.log(handlearray([200,300,400,500,600]
))


