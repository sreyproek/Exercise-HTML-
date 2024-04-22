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
  
  // Function to display details of a person or a student
  function displayPersonDetails(person) {
    console.log('Details:');
    person.displayDetails();
  }
  
  // Create instances of the classes
  const person1 = new Person('Bopha', 20, 'cambodia', '01');
  const student1 = new Student('Sreyproek chhorn', 21, 'cambodia', '02');
  
  // Call displayDetails() with instances of both classes
  displayPersonDetails(person1);
  displayPersonDetails(student1);
  