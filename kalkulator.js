var prompt = require('prompt-sync')();
//
// get input from the user.
//
var a = prompt('Input the first number : ');
var b = prompt('Input the second number : ');
var c = Number(a) + Number(b);
console.log('The result is '+c)