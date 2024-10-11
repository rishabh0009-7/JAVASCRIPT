//loops in js
//for loop with break and continue in js

// for loop
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is best number ");

//     }
//     console.log(element);

// }
// console.log(element);//this will not work scopese bahar hai na

//loop ke andar loop
// for(let i =0; i<=10;i++){
//     console.log(`outerloop  value :${i}`);

//     for (let j = 0;j<=10;j++){
//         console.log(`inner loop  value ${j}and inner loop ${i}`);

//     }
// }

// using loop in array
// let myArray = ["flashes", "batman" ,"superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element );

// }

//some imp keywords break and comntinue

// for (i =0; i<=20; i++){
//     if (i==5){
//         console.log(`detected 5`);

//         break //isse exit hojayega vahi se direct  aage kuch nhi chalega
//     }
//     console.log(`value of i  is ${i}`);

// }

for (i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log(`detected 5`);

    continue; //isse skip hojayega ye wala part par   baaki  sab chalega bas 5 skip hoga
  }
  console.log(`value of i  is ${i}`);
}
