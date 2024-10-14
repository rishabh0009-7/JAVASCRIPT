// //dom manipulation (chedchad)--> console mai jakar 
// // dom html 

// // window --> document --> html 
// //html - 2 parts --> head ,body
// //head - 2 part --> title , meta 
// //title - > text node 
// //meta -->attribute


// //body -->div --> attribute 
// //div - 2 child --> h1 ,p
// //h1--> text node , attribute 
// //p -->text node 

// //note -->html collections , node collection ,array ye sab alag alag cheez hai z

// //some dom manipulation methods  - with the help of this we can maipulate  html files in js with id and class 
// // DOM (Document Object Model) manipulation is how you interact with and modify the content, structure, and style of a webpage using JavaScript. The DOM represents the HTML of the page as a tree of objects that can be easily accessed and changed.



// //1-getelementbyid

// // document.getElementById('title').id //title
// // document.getElementById('title').class //undefimed
// // document.getElementById('title').className //heading
// // document.getElementById('title').getAttribute('id') //title
// // document.getElementById('title').getAttribute('class') //heading
// // document.getElementById('title').setAttribute('class' , 'test') //undefined aayega  par file mao test ho chuka hoga check karna 

   
// // const title = document.getElementById('title').id //title
// // console.log(title);


// // 2- elemnt .style 

// title.style.backgroundcolor ='green'
// title.style.padding ='15px'   


// // 3-Element.innerText--> isme wahi text ataa hai jo display par visible hai 
// // Element.textcontent--> isme  chahe visible ho ya nhi saraa text dikhta hai 

// // span wala aki display none  thi vo isliye dikh nhi  raha tha display mai 
// // title.innerText // learning dom
// // title.textcontent//learning dom test text 


// //4- elemnt.innerhtml --> isme pura html de raha hai agar koi html likha hai to vo bhi ajayega 
// title.innerHtml//  learning dom  <span  style="display: none;">test text </span>




// //5- document.queryselector() -->This method is more flexible as it allows you to select an element using CSS-style selectors (like class names, tags, or IDs). // it select only one if there are many h2 

// document.querySelector('h2') //ye agar bht saare h2 hai to pehla walaa dedega // <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, voluptas?</h2>


// document.querySelector('#title') //  <h1  id = "title" class = "heading">... </h1>

// //6-queryselector all --> will select all items not just one 
// const temp = document.querySelectorAll('h2') // NodeList(4) [h2, h2, h2, h2]

// // note - node list is not same as array 
// // ab isme hume green color karna hai agar 
// temp.style.color = 'green' // par isme aise green nhi hoga hume individual select karna hoga 

// temp[0].style.color = 'green'

//yahi diff hai query selector and  queryselector all mai usme array hotahai isme node listisliye [0 ] aise karke access karna hota hai 

// query selector all mai slect to saare hota hai par changes ek ek karke hi kar  skta hai to avoid this use for each loop 
//node list mai map use nhi kar ksta for this we have to convert it into array 


//7- getelemntbyclassname
//isme html collection ataa hai --> isme for each nhi lag sktaa  isliye isko convert karna padta hai array mai



// const tempitem = document.getElementsByClassName('list')
// //method to convert 
//  Array.from(tempitem) // now it will get convert  and we can use  loops  and any array method  like map etc  



