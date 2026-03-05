//A JavaScript string is zero or more characters written inside quotes.
let text = "John Doe\n";
console.log(text);

console.log();

// Templates were introduced with ES6 (JavaScript 2016).
// Templates are strings enclosed in backticks 
// Templates allow single and double quotes inside a string:
// Templates allow multiline strings

let text1 =
`The quick
brown fox
jumps over
the lazy dog's tail.`;
console.log(text1);

console.log();

// Comparing two JavaScript objects always returns false.
let x = new String("John");
let y = new String("John");
console.log(x===y);

console.log();
// Interpolation
// Template Strings allow variables in strings.
let firstName = "John";
let lastName = "Doe";
let fullName = `Welcome ${firstName}, ${lastName}!`;
console.log(fullName);