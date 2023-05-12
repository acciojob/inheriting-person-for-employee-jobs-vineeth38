// complete this js code
function Person(name, age) {
	 this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}
function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
  this.jobTitle = jobTitle;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}
// Create a new Person instance
const person1 = new Person('Alice', 30);
// Call the greet method
person1.greet(); // Output: Hello, my name is Alice, I am 30 years old.

// Create a new Employee instance
const employee1 = new Employee('Bob', 25, 'Software Engineer');
// Call the greet method (inherited from Person)
employee1.greet(); // Output: Hello, my name is Bob, I am 25 years old.
// Call the jobGreet method
employee1.jobGreet(); // Output: Hello, my name is Bob, I am 25 years old, and my job title is Software Engineer.
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
