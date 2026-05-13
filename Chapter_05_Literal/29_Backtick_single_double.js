// Single vs Double vs Backtick strings

let single = 'Hello\nWorld';   // no interpolation, \n works
let double = "Hello\nWorld";   // same as single
let backtick = `Hello
World`;                         // multi-line, allows ${} interpolation

let name = "Raj";
console.log(single);            // Hello (newline) World
console.log(double);            // Hello (newline) World
console.log(backtick);          // Hello (newline) World
console.log(`Hi ${name}`);      // Hi Raj  (interpolation - backtick only)
