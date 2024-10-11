//high order array loops- used when array ke nadfar object sho ya fir strings ho 
//array specific loops  

//forof 
// syntax 
// for (const element of object) { // ye object js walaa object nhi hai object se yaha matlab hai ki kis cheez pe lagana hai 
    
// }
// //for of loop in array 
// const arr = [1,2,3,4,5]
// for (const i  of arr) {
//     console.log(i);
    
    
// }

// const greetings = "hello world"
// for (const  greet  of greetings) {
//     console.log(`each char is ${greet}`);
    
// }

//maps - objects hi haai holds key value pairs and remembers the original  insertion oredr of keys  
//objects bhi key value pair rakhta hai bas vo insertion of keys ke order ko yaad nhi rakhta 
//map mai saare cheezein unique hoti hai repeat nhi karti
// const map = new Map()
// map.set('IN',"India")
    //     JS :'JAVASCRIPT',
    //     CPP:'C++',
    //     RB:'RUBY',
    //     swift:'SWIFT BY APPLE '
    // }


    // for (const key in myobject) {
    //     console.log(`${key} shortcut is for ${myobject[key]}`); 
        
            
    //     }

// Map.set('USA',"UNITED STAES OF AMERICA")
// Map.set('fr',"france")
// map.set('IN',"India") //ye add nhi hoga 
// console.log(map)


//for of loop in maps
// for (const  key of map) {
//     console.log(key);
    
// } //isse sirf key aayegi  value nhi 


// for (const [key,value] of map) {
//     console.log(key,':-',value);
    
    
// }


//for of loop in objects - nhi hai iterable nhi chalega 

// const myobject ={
//     'game1':'nfs',
//     'game2':'spiderman'
// }

// for (const [key,value] of myobject){
//     console.log(key,':-',value);
    
// }

// loops in object
// loops in object we use  for in (for ,while se bhi hojayega par new loops bhi anaa chahiye )




    //  using for in in arrays 
    
    // c


    // for (const  key in programming) {
    //     console.log(programming[key]);
        
       
    // }

    //note - for of --> arrays, map  not in object 
    // for in --> arrays ,object  not in maps


    //for eachg loop  - used in array
    // const coding =["js","rb","py","java" ,"cpp"]
//basic 
    // coding.forEach(function (val){
    //     console.log(val);
        
    // } ) //function name nhi ayega kyuki call back hai 
    

    //using arrow function for each

// coding.forEach((item) => { //isme sirf zaruru nhi ki item hi ayaa aur bhi aa skta hai 
//     console.log(item);
    
    
// });  

// // for each can be used in function declaration also 

// function printME(item){
//     console.log(item);
    
// }

// coding.forEach(printME)


// parameters in for each loop
//ye zarurui nhi ki sirf item ayaa  aur bhi cheezewin aa skti hai 

// coding.forEach((item , index,arr)=>{
//     console.log(item,index,arr);
    

// })


//array ke nadar objects hai to we can use for each

const mycoding= [
    {
       languagename:"java",
       languagefilename :"java" 
    },
    {
       languagename:"javascript",
       languagefilename :"js" 
    },
    {
       languagename:"python",
       languagefilename :"py" 
    },
]

mycoding.forEach( (item) => {
    console.log(item.languagename);
    
})