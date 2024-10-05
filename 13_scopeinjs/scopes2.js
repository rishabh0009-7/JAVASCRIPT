// scope level and mini hosting in js 

//nested scope -->jo child function hai vo parent ko access katr pataa hai 

function  one (){
    const username = "rishabh"

    function two(){
        const website ="yt"
        console.log(username)  // this will work kyuki ye apna scope ke andar hi access ho raha hai 
       }
       console.log(website) // this will not work kyuki ye scope ke bahar access ho raha  hai 
       two()
}
one()



//note - scope ke andar access karoge to sab chalega par agar scope se bahar access kara na to nhi chalega 

//example2 
if(true){
    const username = "rishabh"
    if(username== "rishabh"){
        const website = "yt"
        console.log(username+ website )
    }
    console.log(website) //error
}
console.log(username)//error
// ---------------------------------------------------------
//techniques to write function 
//method 1 
function addone(num){
    return num +1
}
console.log(addone(5))


//method 2 variabvles mai daal ke 
const addone = function (num){
    return num +1
}
console.log(addone(6))


//now agar console waali line ko pehle likhe 
console.log(addone(5))  // ye walaa method tabhi chalega 
function addone(num){
    return num +1
}



//method 2 // ye walaa nhi chalegha error aayega 
console.log(addone(6))
const addone = function (num){
    return num +1
}
