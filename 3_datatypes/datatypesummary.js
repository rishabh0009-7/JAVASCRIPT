// datatype- primitive  , non primitive 
// kis tareeke se memory mai data ko rakha  jataa hai uss basis pe 2 tareeke ke hota hai datatype
//null means empty not 0
//undefined means  variable declare but no value is assigned 
//symbol ksi value ko  unique banana ke liye use hota hai 


//primitive 
//7 types : string , number , boolean , null , undefined  , symbol , bigint

const id = symbol('123')
const anotherid = symbol('123')
console.log(id === anotherid) // false 



//reference type (non primitive )
// arrays (list) , objects(dictionary) , functions 

const heroes = ["shaktiman ", "nagraj", "doga"] //arrays

let myobj= { //object
    name:"rishabh",
    age :22,
}


const myfunction =function(){ //function
    console.log("hello")

}
  

// type of  null --> object 