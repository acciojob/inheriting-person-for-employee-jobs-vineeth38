// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding greet method to Person prototype
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old.");
}

// Employee constructor function
function Employee(name, age, jobTitle) {
  // Calling Person constructor function with name and age arguments
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inheriting the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Resetting the constructor of the Employee prototype
Employee.prototype.constructor = Employee;

// Adding jobGreet method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old, and my job title is " + this.jobTitle + ".");
}

// Example usage
var person = new Person("John Doe", 25);
person.greet(); // Hello, my name is John Doe, I am 25 years old.

var employee = new Employee("Jane Smith", 30, "Manager");
employee.greet(); // Hello, my name is Jane Smith, I am 30 years old.
employee.jobGreet(); // Hello, my name is Jane Smith, I am 30 years old, and my job title is Manager.


