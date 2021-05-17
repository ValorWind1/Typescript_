"use strict";
console.log("Hello");
var a;
// a = 5; wont work becase of type
a = "asddasd";
console.log(a);
//functions types parameters 
function count(x) {
    for (var i = 0; i < x; i++) {
        console.log(x);
    }
}
count(3);
//optional parameters using ? 
function greet(name) {
    console.log("Hello, " + (name || 'Anonymous') + "!");
}
greet();
// OR use default parameters instead like this
function proclaim(status, repeat) {
    if (status === void 0) { status = "not ready..."; }
    if (repeat === void 0) { repeat = 1; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm " + status);
    }
}
proclaim();
//EXPLICITLY MAKING THE RETURN TYPE STRING 
function createGreeting(name) {
    if (name) {
        return "Hello, " + name + "!";
    }
    return undefined;
    //Typescript Error: Type 'undefined' is not assignable to type 'string'. BECAUSE ABOVE AFTER PARAMETERS : STRING     
}
;
// Void return types 
// even when we are not returning anything is good idea to use type void
function logGreeting(name) {
    console.log("Hello, " + name + "!");
}
logGreeting("nani");
