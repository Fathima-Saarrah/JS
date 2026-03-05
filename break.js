// The break statement "jumps out" of loops and switches.
// The break statement terminates the execution of a loop or a switch statement.

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log(i);
}
console.log();

// Break in switch

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log("Today is "+day);

console.log();

//Break using labels
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break; }
    console.log(i);
  }
}