// You need to create a class with the static and non - static methods as well as variables.
// It will be a simple class of our Playwright 2x batch.You will be also printing out the students.
//     Create 10 objects of students and print them.Also create a print method.

class PlaywrightClass {
  static mentor_name = "Pramod";
  static batch_name = "Playwright2x";
  static batch_time = "Morning";

  student_name;
  student_email;
  student_phone;

  constructor(student_name, student_email, student_phone) {
    this.student_name = student_name;
    this.student_email = student_email;
    this.student_phone = student_phone;
  }

  static classTime() {
    console.log(
      "Class will be held at " + this.batch_time + " for below students",
    );
  }

  studentDetails() {
    console.log(
      this.student_name +
        " - " +
        this.student_email +
        " - " +
        this.student_phone,
    );
  }
}

const student1 = new PlaywrightClass("rahul", "rahul@gmail.com", "8567834589");

const student2 = new PlaywrightClass(
  "anjali",
  "anjali@gmail.com",
  "9567834589",
);

console.log(
  PlaywrightClass.mentor_name +
    " is taking class for the " +
    PlaywrightClass.batch_name +
    " students",
);
PlaywrightClass.classTime();
student1.studentDetails();
student2.studentDetails();

// o/p:
// Pramod is taking class for the Playwright2x students
// Class will be held at Morning for below students
// rahul - rahul@gmail.com - 8567834589
// anjali - anjali@gmail.com - 9567834589
