class Person {
    #name;
    #age;
    #country;
  
    constructor(name, age, country) {
      this.#name = name;
      this.#age = age;
      this.#country = country;
    }
  
    getName() {
      return this.#name;
    }
  
    getAge() {
      return this.#age;
    }
  
    getCountry() {
      return this.#country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.getName()}`);
      console.log(`Age: ${this.getAge()}`);
      console.log(`Country: ${this.getCountry()}`);
    }
  }
  
  class Student extends Person {
    #studentID;
  
    constructor(name, age, country, studentID) {
      super(name, age, country);
      this.#studentID = studentID;
    }
  
    getStudentID() {
      return this.#studentID;
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Student ID: ${this.getStudentID()}`);
    }
  }
  
  // Create instances of the Student class
  const student1 = new Student('Bopha', 20, 'cambodia', '01');
  const student2 = new Student('Sreyproek chhorn', 21, 'cambodia', '02');
  
  
  
  // Display details of student1
  console.log('Student-1 Details:');
  student1.displayDetails();
  
  // Display details of student2
  console.log('\nStudent-2 Details:');
  student2.displayDetails();
  