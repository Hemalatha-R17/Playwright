// You need to create a class with the name of Calculator where you will have different methods available
// for some subtraction, modulus, division, and multiplication.What will happen is you will basically
// create an object with the two variables.You will basically give the output of some subtraction,
//     modulus, division, and multiplication.

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  addition() {
    console.log(
      "Addition of two numbers " +
        this.num1 +
        " " +
        "+" +
        " " +
        this.num2 +
        " is: " +
        (this.num1 + this.num2),
    );
  }

  subtraction() {
    console.log(
      "Subtraction of two numbers " +
        this.num1 +
        " " +
        "-" +
        " " +
        this.num2 +
        " is: " +
        (this.num1 - this.num2),
    );
  }

  multiplication() {
    console.log(
      "Multiplication of two numbers " +
        this.num1 +
        " " +
        "*" +
        " " +
        this.num2 +
        " is: " +
        this.num1 * this.num2,
    );
  }

  division() {
    console.log(
      "Division of two numbers " +
        this.num1 +
        " " +
        "/" +
        " " +
        this.num2 +
        " is: " +
        this.num1 / this.num2,
    );
  }

  modulus() {
    console.log(
      "Modulus of two numbers " +
        this.num1 +
        " " +
        "%" +
        " " +
        this.num2 +
        " is: " +
        (this.num1 % this.num2),
    );
  }
}

const add = new Calculator(20, 10);
add.addition();
add.subtraction();
add.multiplication();
add.division();
add.modulus();

// o / p:
// Addition of two numbers 20 + 10 is: 30
// Subtraction of two numbers 20 - 10 is: 10
// Multiplication of two numbers 20 * 10 is: 200
// Division of two numbers 20 / 10 is: 2
// Modulus of two numbers 20 % 10 is: 0
