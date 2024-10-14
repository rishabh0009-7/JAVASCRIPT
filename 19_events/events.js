//events in javascript
// In JavaScript, an event refers to any interaction or occurrence that happens in the browser, like clicking a button, hovering over an element, submitting a form, or loading a webpage. Events are actions that the user or the browser can trigger, and you can use JavaScript to respond to those events with functions called event handlers or event listeners.

//events are mostly browser events and environment events 

//event object-->The event object in JavaScript contains detailed information about an event that has occurred. When an event happens (like a click or a key press), the browser creates an event object and passes it to the event handler. This object provides useful properties and methods that give you information about the event and allow you to control its behavior.

//methods 
//type
element.addEventListener('click', function(event) {
    console.log(event.type);  // Output: "click"
});


//target 
element.addEventListener('click', function(event) {
    console.log(event.target);  // Output: the element that was clicked
});

//cuurent target
element.addEventListener('click', function(event) {
    console.log(event.currentTarget);  // Output: the element the listener is attached to
});


//prevent default --> default jo uska kaam hai vo naa ho ex--> jaise form bharta hai to submit karna hota hai par apna aap submit na hojaya isliye we use this 
link.addEventListener('click', function(event) {
    event.preventDefault();  // Stops the link from navigating to the URL
});



//stoppropogation
button.addEventListener('click', function(event) {
    event.stopPropagation();  // Prevents the event from reaching parent elements
});

// clientX and clientY:
element.addEventListener('click', function(event) {
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});


// key and keyCode:
document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}, Key code: ${event.keyCode}`);
});


// altKey, ctrlKey, shiftKey, metaKey:
document.addEventListener('click', function(event) {
    if (event.ctrlKey) {
        console.log("Ctrl key was held down during the click");
    }
});
//related target
element.addEventListener('mouseout', function(event) {
    console.log(`Mouse left ${event.target} and entered ${event.relatedTarget}`);
});


//which
element.addEventListener('click', function(event) {
    console.log(event.which);  // 1 for left button, 2 for middle, 3 for right
});
