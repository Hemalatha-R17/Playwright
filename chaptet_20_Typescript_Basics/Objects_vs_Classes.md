# Objects vs Classes — What They Are & How They Differ

---

## 1. What is an Object?

An **object** is a collection of key-value pairs stored in a single variable.  
It holds **data (properties)** and can also hold **functions (methods)**.

```js
// Object literal — create one object directly
let user = {
  name: "Alice",
  age: 30,
  isActive: true,

  greet() {
    console.log("Hello, " + this.name);
  }
};

console.log(user.name);     // Alice
console.log(user.age);      // 30
user.greet();               // Hello, Alice
```

### Key facts about objects
- Created with `{ }` — called an **object literal**.
- Properties are accessed with dot (`.`) or bracket (`["key"]`) notation.
- You can add or delete properties after creation.
- Every object is a **one-off** — not reusable as a template.

---

## 2. What is a Class?

A **class** is a **blueprint / template** for creating many objects that share the same structure and behavior.  
You define it once, then use `new` to stamp out as many instances as you need.

```js
class LoginPage {
  // constructor runs automatically when you call new LoginPage()
  constructor(url, title) {
    this.url   = url;
    this.title = title;
  }

  navigate() {
    console.log("Going to: " + this.url);
  }

  getTitle() {
    return this.title;
  }
}

// Create instances (objects) from the class
let stagingPage = new LoginPage("https://staging.vwo.com/login", "Staging Login");
let prodPage    = new LoginPage("https://app.vwo.com/login",     "Prod Login");

stagingPage.navigate();     // Going to: https://staging.vwo.com/login
prodPage.navigate();        // Going to: https://app.vwo.com/login

console.log(stagingPage.getTitle()); // Staging Login
console.log(prodPage.getTitle());    // Prod Login
```

### Key facts about classes
- Defined with the `class` keyword.
- `constructor()` initialises properties when `new` is called.
- Methods are shared across all instances (not duplicated).
- Supports **inheritance** (`extends`), **getters/setters**, and **static** members.

---

## 3. Side-by-side Comparison

| Feature | Object (literal) | Class |
|---------|-----------------|-------|
| Syntax | `let x = { }` | `class X { }` |
| Purpose | One-off data/behavior bag | Reusable blueprint for many objects |
| Create instance | Already IS the instance | `new ClassName()` |
| How many? | One per literal written | Unlimited instances from one class |
| Shared methods | Copied into each object | Shared via prototype (efficient) |
| Inheritance | Not directly supported | `extends` + `super` |
| Private fields | Not enforced | `#field` (enforced at runtime) |
| Static members | Not applicable | `static prop` / `static method()` |
| Best for | Quick config, one-time data | Page Object Model, reusable components |

---

## 4. Object — Deep Dive

### Destructuring
Pull out properties into variables directly.

```js
let testConfig = {
  browser: "chromium",
  baseURL: "https://app.vwo.com",
  timeout: 5000
};

let { browser, baseURL } = testConfig;
console.log(browser);  // chromium
console.log(baseURL);  // https://app.vwo.com
```

### Rename while destructuring
```js
let { browser: browserName } = testConfig;
console.log(browserName); // chromium
```

### Spread operator — copy & merge objects
```js
let defaults = { timeout: 5000, retries: 2 };
let custom   = { timeout: 10000, headless: true };

let finalConfig = { ...defaults, ...custom };
// { timeout: 10000, retries: 2, headless: true }
// 'timeout' from custom wins because it comes last
console.log(finalConfig);
```

### Useful built-in methods
```js
let credentials = { username: "tester", password: "secret" };

console.log(Object.keys(credentials));    // ["username", "password"]
console.log(Object.values(credentials));  // ["tester", "secret"]
console.log(Object.entries(credentials)); // [["username","tester"],["password","secret"]]

// Check if a key exists
console.log("username" in credentials);  // true
console.log("token"    in credentials);  // false
```

---

## 5. Class — Deep Dive

### Inheritance (`extends` + `super`)
A child class **inherits** all methods from the parent. Use `super()` to call the parent constructor.

```js
// Parent
class BasePage {
  constructor(url) {
    this.url = url;
  }
  open() {
    console.log("Opening: " + this.url);
  }
}

// Child
class DashboardPage extends BasePage {
  constructor(url, userName) {
    super(url);                 // calls BasePage constructor
    this.userName = userName;
  }

  // Override parent method
  open() {
    super.open();               // still call parent's open()
    console.log("Logged in as: " + this.userName);
  }

  greet() {
    console.log("Welcome, " + this.userName);
  }
}

let dashboard = new DashboardPage("https://app.vwo.com/dashboard", "Alice");
dashboard.open();   // Opening: https://app.vwo.com/dashboard
                    // Logged in as: Alice
dashboard.greet();  // Welcome, Alice
```

### Getters & Setters
Look like properties, run code behind the scenes.

```js
class TestUser {
  #password; // private — only accessible inside this class

  constructor(username, password) {
    this.username  = username;
    this.#password = password;
  }

  // getter — called as testUser.maskedPassword (no parentheses)
  get maskedPassword() {
    return "*".repeat(this.#password.length);
  }

  // setter — called as testUser.newPassword = "value"
  set newPassword(value) {
    if (value.length < 8) {
      console.log("Too short! Min 8 chars.");
      return;
    }
    this.#password = value;
    console.log("Password updated.");
  }
}

let u = new TestUser("alice", "secret12");
console.log(u.maskedPassword); // ********
u.newPassword = "abc";         // Too short! Min 8 chars.
u.newPassword = "NewPass@1";   // Password updated.
```

### Static members
Belong to the **class**, not the instance. Good for counters, factories, constants.

```js
class TestCounter {
  static count = 0;

  constructor(name) {
    this.name = name;
    TestCounter.count++;
  }

  static reset() {
    TestCounter.count = 0;
  }
}

new TestCounter("Login Test");
new TestCounter("Cart Test");
new TestCounter("Checkout Test");

console.log(TestCounter.count); // 3
TestCounter.reset();
console.log(TestCounter.count); // 0
```

---

## 6. When to Use Which?

| Situation | Use |
|-----------|-----|
| One-time config or data (e.g., test options, user credentials) | **Object literal** |
| Multiple pages/components with the same shape (Page Object Model) | **Class** |
| Need to share behavior across many instances | **Class** |
| Quick, inline data that doesn't need methods | **Object literal** |
| Need private fields, inheritance, or static helpers | **Class** |
| You only need one "thing" and won't clone it | **Object literal** |

### Real-world Playwright example

```js
// Object literal — good for one-off test data
let loginData = { username: "admin", password: "Admin@123" };

// Class — good for Page Object Model (reused across many tests)
class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async goto()  { await this.page.goto("/login"); }
  async login(username, password) {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
    await this.page.click("button[type=submit]");
  }
}
```

---

## 7. Quick Rules of Thumb

- **One-off data with no reuse** → object literal `{ }`.
- **Same shape needed many times** → class + `new`.
- A class **is** a factory for objects — every `new ClassName()` produces an object.
- Every object created from a class is an **instance** of that class.
- Child `instanceof` Parent → `true` (inherits identity too).
- Private `#field` → only readable/writable inside the class body; accessing from outside throws a `SyntaxError`.
- `static` members → call on the class (`Counter.count`), **not** on an instance (`myObj.count` → `undefined`).
