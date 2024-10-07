//how does javascript code executed  + call stack 
//note - js is single threaded language

//javascript execution context - global , functional ,eval 

 //example code 
 let val1 = 10 
 let val2= 5
 function addNum (num1,num2){
    let total = num1um1 + num2

 }
 let result1 = addNum(val,val2)
let result2 = addNum(10,18)


//steps 
//1- global execution
// code -> global execution context banta hai -> aur jaha global execution contest banta hai vaha this wala variable ko rakh diya jataa hai  


// 2-memory phase 
//source code runs in 2 phases - memory creation phase , execution phase 
//memory ceration phase mai jo humne variable declare  kiya hai unke liye  jagah   allot hoti hai 
// val 1= undefined 
//val2 = undefiend
//addnum = isme jaati hai function ki definition
// result1= undefined 
// result2 = undefined

//3- execution phase 
// val1 = 10 
//   val2= 5
//addnum-->  jitni baar ye functions execute hota hai utni baar ye new executional context banta hai w hich contains new variable environment + execution thread aur kaam hojana ke baad ye delete bhi hota hai 
//ab new execuional context mai bhi 2  cheezein dubara hoti hai 
//i) memory phase - 
// val 1= undefined 
//val2 = undefiend
//total = undefined 

// ii)execution context (processing)
//num1 = 10 
// num2 = 5
//total = 15 // aur ye total return bhi ho raha hai global execution context mai  

// ab iss executional context ka kaam hogya to ab ye delete ho jaayega aur delete hogya to vapas  ab hum executional phase yaani step 3 mai agya ab dubara new executional context banega 
//result1 = 15
//result 2 = 28 
// fir wahi kaam dubara hoga isme firse memory phase and execution context hoga and so on yahi repeat hota hai 



//call stacks
//concept - lifo (last in first out)
//matlab agar bht sare function call hua to vo ek stack ki form mai honge aur jo last walaa call hua vahii sabse pehle exit karega stack se 