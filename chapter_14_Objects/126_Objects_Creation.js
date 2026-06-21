let c = { status: "pass" };
let d = { status: "pass" };
console.log(c); //{ status: "pass" }
console.log(d); //{ status: "pass" }

//c and d values is same but reference is different

if (c === d) {
  console.log("true");
} else {
  console.log("false");
} //false
