//imp for interviews 
//prototype is a js unique behaviour

//ex- console kiya to vaha pe prototype likhga ataa hai 
//A prototype in JavaScript is a mechanism through which objects inherit properties and methods from other objects. Every JavaScript function has a prototype property, which is used when the function is treated as a constructor to create objects using the new keyword. Objects created using the constructor have access to the properties and methods defined on the constructor's prototype.

// in js everything is an object  and jo properties object ke pass available hai vo string ke pass bhi hogi aerray ke pass bhi etc
///isliye in js sabka prototype object hai
//object ka prototype null  hai 


// is function an object ?
//yes function function bhi hai aur function object bhi hai 
//jo cheeze object mai karta hai vo function mai bhi kar skta hai
//ex-

function multiplyby5(num){
    return num*5
}
multiplyby5.power= 2 // jaise object mai dot laga ke karta hai vaise function  mai bhi kar skta hai kyuki vo bhi ek obejct hai 
console.log(multiplyby5(5)); //25
console.log(multiplyby5.power); //2
console.log(multiplyby5.prototype); //{}


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){ // yaha humne apna khudke new prototype banaya hai apni marzi ka bana skta ho kuch bhi 
    this.score++
}
createUser.prototype.printMe = function(){// yaha bhi khudka prototype banan liya humne
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25) //username,score 
const tea = createUser("tea", 250)

chai.printMe() 


/* imp for interviews 

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



//ex-
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() //abhi hamara pass hitesh naam ka method exit nhi karta par hum bna lenge
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
heroPower.heyHitesh() // ye nhi chalega kyuki array ko diya hai hero power object hai



// inheritance -->

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  //m-1 we want to link 2 objects-->__proto__ use kro
}
 //m-2 same cheez 2 object kolink karna bahar bhi kar skta hai
Teacher.__proto__ = User

//m-3 modern syntax of linking 2 objects 
Object.setPrototypeOf(TeachingSupport, Teacher)


//----------------------------------------------------



// challenge
let myName = "hitesh     "
let mychannel = "chai     "
console.log(myName.length); //11
// par hume to iski true length chahiye yaani sitrf hitesh ki spaces ki nhi to aisa to koi method nhi hota abhi par hum create karenge
// console.log(myName.trueLength);


//taking another example

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()