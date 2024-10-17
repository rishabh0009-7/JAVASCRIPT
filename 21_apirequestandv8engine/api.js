 //some famous apis 
 //apigithub
 //randomuser.me

 //api padhna hai kaafi difficult isliye we use json formatter

 //before studying fetch we will study some old methods
 //xmlhttprequest-->it was used heavily in ajax programming


//  The XMLHttpRequest.readyState property in JavaScript defines the state an XMLHttpRequest (XHR) object is in during its lifecycle when making asynchronous requests. It tells you how far along the request process is

//1. 0 - UNSENT:
// The request has been created but not yet opened.
// No .open() method has been called yet
// const xhr = new XMLHttpRequest();
// console.log(xhr.readyState);  // Output: 0



// 2. 1 - OPENED:
// The .open() method has been called, and the request is ready to be sent.
// The request is now being configured, but .send() has not been called yet

// xhr.open('GET', 'https://example.com');
// console.log(xhr.readyState);  // Output: 1


// 3. 2 - HEADERS_RECEIVED:
// The .send() method has been called, and the headers have been received from the server.
// The status and headers of the response are now available via xhr.status and xhr.getAllResponseHeaders().

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 2) {
//         console.log("Headers received!");
//     }
// };
// xhr.send();




// 4. 3 - LOADING:
// The response body is being received. Some data has been received, but the request is not complete.
// You can access the part of the data that has been downloaded so far

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 3) {
//         console.log("Loading data...");
//     }
// };


// 5. 4 - DONE:
// The request is complete, and the entire response has been received.
// Now, you can check the full response using xhr.responseText or xhr.responseXML


// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log("Request complete!");
//         console.log(xhr.responseText);  // Process the response here
//     }
// };



//v8 engine 
// The V8 engine is an open-source JavaScript and WebAssembly engine developed by Google. It is primarily used in the Google Chrome browser and is also a core component of Node.js, a runtime that allows you to run JavaScript on the server-side.
//note - console log is not a part of core js it comes from v8 engine 
// console.log() is not technically part of JavaScript itself. Instead, it's part of the environment in which JavaScript is running.