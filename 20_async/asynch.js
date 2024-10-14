//async javascript


// Synchronous:
// In synchronous programming, tasks are executed one after the other. Each task must wait for the previous one to complete before moving on to the next. This is often referred to as blocking because the next line of code cannot run until the current task finishes.

// If a task takes a long time to complete (like reading a large file or making a network request), the entire program will wait for that task to finish before continuing, which can lead to delays or a frozen UI in web applications.
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");




// In asynchronous programming, tasks can be started, but the program doesn't wait for them to complete before moving on to the next task. The task is executed in the background, and once it's done, a callback, promise, or another method is used to handle the result. This is called non-blocking.

// Asynchronous programming is essential for tasks like network requests, file I/O, or timers, where waiting for the task to complete would otherwise block the main thread
//ex- setTimeout(() => console.log("Task 2"), 1000); console.log("Task 3").



// -------------------------------------------------------------------------

//note - default js 
//  javascript --> synchronous (ek ek line execute hogi aage badhna se pehle), single threaded

//execution context -->execute one line of code at a time 
//each operation wiats for the last one to execute


//blocking code vs non blocking code 

//block code -->block the flow of program -->read file sync
//non block code -->does not block the flow of program -->read file async
//non block code is not good kyuki maan lo succes valaa print karana ahai par succes walaa tabhi hona chahiye na jab saare lines chal jayaa to isliye async itna use nhi karta 
//koi bhi achaa bura nhi hai use case mai depend karta hai 

//note --> js engine -->made up of memory heap and call stack 

//check async flow in async.png

// sync mai kya hai ki task ek complete hona ka waut nhi karta  saraa execute hona start hojata hau aur jonsa complete hota hai vo callback mai chala jataa hai 


//check async flow in async.png