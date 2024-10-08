//truthy values  and falsy values 

//falsy values - jisse false  manaa jataa hai 
// false , 0,-0,BigInt, 0n, "",null,undefined,NaN
// except these all are truthy values 
//some truthy values - "0", 'false', " "(isme space hai ), [],{},function(){}, 


//note 
//false == 0 --> true , false ==''-->true , 0 =='' --> true


//note - nullish coalescing operator(??)--> jab databse se response ataa hai to ho sktya hai null response ayaa ya undefined  to hume values ke 2 option leke chalna padta hai 
//errors ayaa to asie handle kar skta hai 
//ternary operator aur ye same nhi hai alag hai bhaii 

let val1 ;
val1= 5??10 // 5
val1= null??10 //10
val1= undefined ??10 //10
console.log(val1 );


//ternary operator 
// cond?true:false 

const iceTeaPrice= 100
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80");



