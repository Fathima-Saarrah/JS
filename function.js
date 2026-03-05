function add(a, b) {
  return a + b;
}

let sum1 = add(5, 5);
let sum2 = add(50, 50);

console.log(sum1);
console.log(sum2);

console.log();
//calling and reference
function sayHello() {
  return "Hello World";
}

let text = sayHello;
let text1 = sayHello();
console.log(text);
console.log(text1);
console.log();
//Parameters are the names listed in the function definition.
//Arguments are the real values passed to, and received by the function.

//Function Expression
const sayHi = function() {
  return "Hi World";
};
console.log(sayHi());
console.log();


//hoisting
//Function declarations are hoisted.
let subtract = sub(2, 3); // Will work
console.log(subtract);
function sub(a, b) {return a - b;}
console.log();


//Arrow Function
//returns by default
//before const square = fucntion (x) { return x * x };
const square = (x) => x * x;
console.log(square(3));