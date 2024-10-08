//control flow in js 

const { LogBox } = require("react-native")

//abhi tak jo bhi kiya usme  pura file ka code run ho raha hai par hamesha aisa nhi hona chahiye hamesha code conditional basis pe run hona chahiye 


//comtrol flow
//`1- if -else 
//if  condn true tabhi vo execute hoga 
if (condn){

}

// some condn operators  <,<=,>,>=,==,!=,!==,===(strict equal it also check datatype )
// ex- 2==="2" //false 
//ex- 2=="2"//true

const temp = 41
if (temp<50 ){
    console.log("less than 50 ");
    
}else{
console.log("temp is greater than 50");
}

console.log("execute "); //ye to run hoga hi hoga iska condn se koi matlab nhi 


//example

const score = 200 
if (score >100){
    const power = "fly"
    console.log(`user power:${power}`);
    
}
console.log(`user power:${power}`); //ye nhi chalega  kyuki variable const power scope  ke andar hai to usko acceess bhi scope ke andar hi kar skta hai  bahar nhi 
//par agar var use kiya hota to kar pataa par aise nhi karna use problems aayengi

//shorthand notation - dont use this not a good practice 
// const balance = 1000
// if (balance >500) console.log("test");  


// nested if - else
const balane = 1000 
if (balance <500 ){
    console.log("less tahn 500 ");
    
}else if (balance <750){
    console.log("less than 750");
    
}else if (balance<900 ){
    console.log("less than 900");
    
}else { 
    console.log("less than 1200");
    

}


//example
const userloggedIn = true
const debitcard = true 
const loggedInfromEmail = false 
const loggedInfromGoogle = true 

if (userloggedIn && debitcard ){
    console.log("allow  to buy course ");
}
if (loggedInfromGoogle || loggedInfromEmail){
    console.log("user logged in ");
    }



// switch case statement- jab ek value hai usko multiple condn se check krna hai 
//basic syntax

// switch(key){
//     case value :


//     break;
//     default:
//         break;

// }
const month =3 
switch(month){
    case 1:
    console.log("jan");
    break;

    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
    case 4:
        console.log("apr");
    case 5:
        console.log("may");
    case 6:
        console.log("june");
        break;
    default:
        break;

}

//note - agar break nhi lagaya na to ye jo exeute hua uske baad ka saraa code execute kardega except default //imp
