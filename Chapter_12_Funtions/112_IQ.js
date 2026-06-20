let g_x = 10;

// Nested scope | blocked scope
function outer() {
  let x = 10;

  function inner() {
    let y = 20;
    console.log(x); //10
  }
  inner();
  console.log(y); //Reference error
}

console.log(outer());
