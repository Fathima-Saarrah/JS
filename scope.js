// Variables declared Globally (outside any block or function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.
// var, let and const

let carName = "Volvo";//global

function myFunction() {
    var carName = "Volvo";//function
}
{
  let x = 2;//block (if,for,while)
}

//hoisting
x=5;
console.log(x);
var x;
//not allowed in let and const
carname = "Volvo";
let carname;


//JavaScript Initializations are Not Hoisted
var z = 5; 
console.log(y+z);
var y = 7;