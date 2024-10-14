// parent and child dom manipulation
const parent =  document.querySelector('.parent')
console.log(parent); //<div class="parent">...</div>

//parents se child pe janaa
console.log(parent.children); //html collection aayegi 
// HTMLCollection(4)
// 0
// : 
// div.day
// 1
// : 
// div.day
// 2
// : 
// div.day
// 3
// : 
// div.day
// length
// : 
// 4

console.log(parent.children[1].innerhtml);

//manna for each nhi chalega par for to chal hi skta hai 
//  for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerhtml);
    
    
//  }


//some  more properties (parent se child pe )

parent.children[1].style.color = "orange"

//first elemnt child -->pehla child ajayega isse 
console.log(parent.firstElementchild);  //<div class ="day">mnonday</div>

//last element child - last child ajayega isse 
console.log(parent.lastElementchild );


 const dayone= document.querySelector('.day') //query selector mai first walaa ta hai 
 console.log(dayone); //<div class ="day">mnonday</div>

 //child se parent pe janaa 
 console.log(dayone.parentElement);

//  child se dusre child pe jaan
console.log(dayone.nextElementSibling);  //<div class ="day">tuesday</div>

//child nodes --> will show all nodes  structure
console.log("nodes:",parent.childNodes); //isme enter bhi count hota hai text naam se , comments bhi   div vagera sab 


//how to create a new elemnt in dom (html) using js --> check dom3.html file 

 
 



