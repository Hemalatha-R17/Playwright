function getToken() {
  return Promise.resolve("abc123");
}

// Playwright
// page.goto() - Promise ()
// await page.goto();

async function run() {
  let token = await getToken();
  console.log(token);
}

run();
// o/p: abc123

//Whenever a function returns a promise, we always use await.
//Whenever you think a function uses promises, we use async.
