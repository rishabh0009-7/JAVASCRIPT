// stack and heap memory in javascript
// memory - stack ,heap 
// stack memory is used in primitive dataype  and heap is used in non primitive
// stack mai kuch bhi store kiya hai to uska copy milta hai  original change kiya to usme change nhi hota 
// heap mai kuch bhi store kiya hai to uska reference milta hai  original change kiya to dusra mai bhi change hojayega 


//stack 
let myyoutube = "rishabh.com"
let anothername =myyoutube //isme myyoutube ki copy agyi 
anothername= "chai"
console.log(myyoutube) //"rishabh.com"
console.log(anothername) //"chai"




