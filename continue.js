// The continue statement skips the current iteration in a loop.
// The remaining code in the iteration is skipped and processing moves to the next iteration.

for (let i = 0; i < 5; i++) {
  if (i === 3) { continue; }
  console.log(i);
}
console.log();

loop1: for (let j = 1; j < 3; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue; }
    console.log(i);
  }
}