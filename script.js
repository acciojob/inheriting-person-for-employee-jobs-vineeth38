// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
	this.greet = function () {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Adding greet method to Person prototype

// Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Calling the Person constructor using call to set name and age properties
  this.jobTitle = jobTitle;
	this.jobGreet()=function (){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle} in js.`);
	}
}

// Inheriting the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Creating instances of Person and Employee
const person = new Person("John", 25);
const employee = new Employee("Jane", 30, "Developer");

// Calling the greet method on person
person.greet(); // Output: Hello, my name is John, I am 25 years old.

// Calling the jobGreet method on employee
employee.jobGreet(); // Output: Hello, my name is Jane, I am 30 years old, and my job title is Developer in js.

