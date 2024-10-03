//object de structure and jason api intro

//object destructuring


const  course = {
    coursename:"js ",
    price:"999",
    courseinstructor :"rizz"

}


// to access value 
// course.courseinstructor 
// course.coursename
// course.course

// ab hume access karna ke liye baar baar likhna padh raha  hai to usse bachna ke liye 

//using object destructuring - to avoid repetition  
const{courseinstructor,price}= course 
console.log(courseinstructor,price)


// API (Application Programming Interface
// api- ex google pe login kiya to uske baad ka headache jo hai vo api ka hai 
//api is like a waiter who takes ur order and  give u result
//server se photo laani ho dusri website kacontent lanaa ho etc

// json- is actually object  but without object name  and sometimes in array format 

// {
//     "name" :"rishabh,"
//     "coursename":"js",
//     "price" :"999"
// }