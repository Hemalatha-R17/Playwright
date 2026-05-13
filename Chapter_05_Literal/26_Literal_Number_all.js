// All number types supported in JavaScript

// Integer
let int = 42;
console.log("Integer:", int); // 42

// Floating-point
let float = 3.14;
console.log("Float:", float); // 3.14

// Scientific (exponential) notation
let sci = 5e3; // 5 * 10^3
console.log("Scientific:", sci); // 5000

// Binary (starts with 0b or 0B)
let bin = 0b1010; // binary for 10
console.log("Binary:", bin); // 10

// Octal (starts with 0o or 0O)
let oct = 0o77; // octal for 63
console.log("Octal:", oct); // 63

// Hexadecimal (starts with 0x or 0X)
let hex = 0xFF; // hex for 255
console.log("Hex:", hex); // 255

// Negative numbers
let neg = -10;
console.log("Negative:", neg); // -10

// Infinity
console.log("Infinity:", Infinity); // Infinity
console.log("1/0:", 1 / 0); // Infinity

// NaN (Not a Number)
console.log("NaN:", NaN); // NaN
console.log('"abc" * 2:', "abc" * 2); // NaN

// Number with underscores (ES2021, for readability)
let bigNum = 1_000_000;
console.log("Underscored:", bigNum); // 1000000

// BigInt (for numbers beyond 2^53 - 1)
let bigInt = 9007199254740991n;
console.log("BigInt:", bigInt); // 9007199254740991n

// Number.MAX_SAFE_INTEGER / MIN_SAFE_INTEGER
console.log("Max safe int:", Number.MAX_SAFE_INTEGER);
console.log("Min safe int:", Number.MIN_SAFE_INTEGER);
