class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  class Student extends Person {
    constructor(name, age, country, studentID) {
      super(name, age, country); 
      this.studentID = studentID;
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Student ID: ${this.studentID}`);
    }
  }
  
 
  const student1 = new Student('Bopha', 20, 'cambodia', '01');
  const student2 = new Student('Sreyproek chhorn', 21, 'cambodia', '02');
  
 
  console.log('Student 1 Details:');
  student1.displayDetails();
  
 
  console.log('\nStudent 2 Details:');
  student2.displayDetails();
  