// ✅ String Reverse | Palindrome Program
// Given a string , Reverse it and print true if they are same.
// Madam is palindrome, pramod is not

let n = "Madam";
// let n = "Doctor";
let a = "";

for (let i = n.length - 1; i >= 0; i--) {
  a = a + n[i];
}
console.log(a);

if (a.toLowerCase() === n.toLowerCase()) {
  console.log("It's a palindrome");
} else {
  console.log("It's not a palindrome");
}
